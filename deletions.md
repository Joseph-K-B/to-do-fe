//app.js


            <Route 
                path= '/signup' 
                render = {(routerProps) => ( 
                  <Auth 
                    type='signup'
                    setToken={this.setToken}
                    {...routerProps}/>
                )}
              />
            <Route 
                path= '/signin' 
                render = {(routerProps) => ( 
                  <Auth 
                    type='signin' 
                    setToken={this.setToken} 
                    {...routerProps}/>
                  )}
              />

// Auth.js
        <form onSubmit={this.handleSubmit}>
            <div className='auth-form'>
                        <label>Email: </label>
                        <input
                            type='email'
                            onChange={(e) =>
                            this.setState({ email: e.target.value })} 
                        />
                    </div>
                    <div className='auth-form'>
                        <label>Password: </label>
                        <input 
                            type='password'
                            onChange={(e) =>
                            this.setState({ password: e.target.value})}
                        />                                                      
                    </div>