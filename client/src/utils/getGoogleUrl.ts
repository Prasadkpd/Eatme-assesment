export const getGoogleOAuthURL = () => {
  const rootUrl = 'https://accounts.google.com/o/oauth2/v2/auth';

  const options = {
    redirect_uri: 'http://localhost:5001/api/v1/sessions/oauth/google',
    client_id: '39295616675-ee4806j9f9c5q05r5ebka24k17lb13ic.apps.googleusercontent.com',
    access_type: 'offline',
    response_type: 'code',
    prompt: 'consent',
    scope: [
      'https://www.googleapis.com/auth/userinfo.profile',
      'https://www.googleapis.com/auth/userinfo.email'
    ].join(' ')
  };

  console.log({ options });
  const qs = new URLSearchParams(options);
  console.log(qs.toString());
  return `${rootUrl}?${qs.toString()}`;
};
