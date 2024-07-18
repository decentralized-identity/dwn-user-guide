export const web5CommunityConfig = {
  didCreateOptions: {
    dwnEndpoints: ['https://dwn.gcda.xyz'] // User provides google's community DWN instance
  }, 
  registration: {
    onFailure(error: unknown) {
      console.log('Registration failed', error)
      // Registration failed, display an error message to the user, and pass in the registration object again to retry next time the user connects.
    },
    onSuccess() {
      console.log('Registration succeeded')
    }
  } 
}

export const web5DefaultConfig = {}