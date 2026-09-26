import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';

export const tmdbAuthInterceptor: HttpInterceptorFn = (req, next) => {

  if (req.url.startsWith(environment.apiUrl)) {
    const modifiedReq = req.clone({
      setParams: {
        api_key: environment.tmdbApiKey
      }
    });

    return next(modifiedReq);
  }

  return next(req);

};
