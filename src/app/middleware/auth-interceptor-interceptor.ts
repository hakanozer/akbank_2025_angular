import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  // token locastorage add header
  // req içindeki bilgileri getir
  console.log({
    url: req.url,
    method: req.method,
    body: req.body,
    headers: req.headers.keys(),
    params: req.params.keys(),
    responseType: req.responseType
  });
  const token = localStorage.getItem('token');
  if (token) {
    const clonedReq = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${token}`),
      params: req.params.append('timestamp', Date.now().toString())
    });
    return next(clonedReq);
  }
  return next(req);
};
