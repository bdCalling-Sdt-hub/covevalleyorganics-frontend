export interface TApiResponse<T> {
      success: boolean;
      status: number;
      message: string;
      data: T;
}

export interface TProduct {
      _id: string;
      name: string;
      description: string;
      image: string;
      ingredientImage: string;
}
