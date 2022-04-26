export default function ({ $axios, redirect }) {
  $axios.onRequest(() => {
    $axios.setToken(window.localStorage.getItem("tokens.access"), "Bearer");
  });

  $axios.onError(async (error) => {
    const httpCode = parseInt(error.response.status);

    if (![401].includes(httpCode)) {
      return Promise.resolve(false);
    }

    if (!window.localStorage.getItem("tokens.access")) {
      return redirect("/login");
    }

    window.localStorage.removeItem("tokens.access");
    const response = await $axios.$post("api/v1/auth/refresh", {
      refreshToken: window.localStorage.getItem("tokens.refresh"),
    });
    if (!response.success) {
      window.localStorage.removeItem("tokens.refresh");
      window.location.replace("/login");
      return;
    }

    window.localStorage.setItem("tokens.access", response.data.tokens.access);
    window.localStorage.setItem("tokens.refresh", response.data.tokens.refresh);
    return await $axios.request(error.config);
  });
}
