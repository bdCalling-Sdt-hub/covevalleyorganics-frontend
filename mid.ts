// import { cookies } from 'next/headers';
// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';

// export function middleware(request: NextRequest) {
//       // console.log('Middleware running');

//       const token = cookies().get('accessToken')?.value;
//       // console.log('Token:', token);

//       if (!token) {
//             console.log('No token found, redirecting...');
//             return NextResponse.redirect(new URL('/', request.url));
//       }

//       return NextResponse.next();
// }

// export const config = {
//       matcher: ['/products-details/:path*', '/blogs-details/:path*', '/contact-details/:path*', '/faq-details/:path*'],
// };
// 92.205.29.166
