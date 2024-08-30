// export function middleware() {
//   //   console.log('hello word!');
//   return Response.json({
//     msg: 'hello there',
//   });
// }

// export const config = {
//   matcher: '/about',
// };

//==========================//

import { NextResponse } from 'next/server';

export function middleware(request) {
  console.log('middleware log');
  return NextResponse.redirect(new URL('/', request.url));
}

export const config = {
  matcher: ['/about/:path*'],
};
