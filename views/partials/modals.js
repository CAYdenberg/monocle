<div class="modal fade" id="modal-signup-form">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h3 class="modal-title">Sign up now!</h3>
      </div>
      <div class="modal-body">

        <form method="POST" action="/user/signup/">
          <div class="form-group">
            <label for="su-email">Email address</label>
            <input type="email" class="form-control" id="su-email" name="email" />
          </div>
          <div class="form-group">
            <label for="su-password">Password</label>
            <input type="password" class="form-control" id="su-password" name="password" />
          </div>
          <div class="form-group">
            <label for="su-password-2">Repeat Password</label>
            <input type="password" class="form-control" id="su-password-2" name="password-2" />
          </div>
          <input type="submit" value="Submit" />
        </form>

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary">Sign up!</button>
      </div>
    </div><!-- /.modal-content -->
  </div><!-- /.modal-dialog -->
</div><!-- /.modal -->

<div class="modal fade" id="modal-signin-form">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h3 class="modal-title">Sign in</h3>
      </div>
      <div class="modal-body">

        <form method="POST" action="/user/signin/">
          <div class="form-group">
            <label for="si-email">Email address</label>
            <input type="email" class="form-control" id="si-email" name="email" />
          </div>
          <div class="form-group">
            <label for="si-password">Password</label>
            <input type="password" class="form-control" id="si-password" name="password" />
          </div>

          <input type="submit" value="Submit" />

        </form>

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary">Log in</button>
      </div>
    </div><!-- /.modal-content -->
  </div><!-- /.modal-dialog -->
</div><!-- /.modal -->
