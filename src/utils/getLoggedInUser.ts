'use client';

import { useEffect, useState } from 'react';

export const useIsLoggedIn = () => {
      const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

      useEffect(() => {
            const token = localStorage.getItem('accessToken');
            setIsLoggedIn(!!token);
      }, []);

      return isLoggedIn;
};
