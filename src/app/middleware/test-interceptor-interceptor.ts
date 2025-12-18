import { HttpInterceptorFn } from '@angular/common/http';

export const testInterceptorInterceptor: HttpInterceptorFn = (req, next) => {
  console.log("Gelen: ", {
    url: req.url,
    method: req.method,
    body: req.body,
    headers: req.headers.keys(),
    params: req.params.keys(),
    responseType: req.responseType
  });
  return next(req);
};
