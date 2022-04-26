type ApiResponse = {
  success: boolean;
  exception: string | null;
  data: any;
  errors: {
    [key: string]: string;
  };
};

export default ApiResponse;
