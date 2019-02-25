<script>
import footer from 'footer'

export default {
  name: 'topbar',
  components: { footer }
}
</script>

<template>
  <div>
      <div class="navbar-header">
          <div class="container">
              <div class="basic-wrapper">
                  <button data-target="#navbar-collapse-02" data-toggle="collapse" class="navbar-toggle" type="button">
                      <span class="sr-only">Toggle navigation</span>
                      <span class="icon-bar"></span>
                      <span class="icon-bar"></span>
                      <span class="icon-bar"></span>
                  </button>
                  <div class="btn responsive-menu pull-right" data-toggle="collapse" data-target=".navbar-collapse"><i class='icon-menu-1'></i>
                    <a class="navbar-brand" href="<?=site_url('/'); ?>">
                      <img src="<?=base_url(); ?>style/images/group@3x.png" class="logo-kas"/></a>
                    <img src="<?=base_url(); ?>style/images/logo-ojk.png" class="ojk">
                  </div>
                  <div id="navbar-collapse-02" class="collapse navbar-collapse pull-right">
                      <ul class="nav navbar-nav">
                          <li<?php echo $navbar_page == '/' ? ' class="active"' : ''?> class="dropdown">
                              <a href="#" class="dropdown-toggle" data-toggle="dropdown">Pinjaman Bisnis</a>
                              <ul class="dropdown-menu">
                                  <li><a href="<?=site_url('invoice'); ?>">Invoice Financing</a></li>
                                  <li><a href="<?=site_url('working'); ?>">Working Capital</a></li>
                              </ul>
                          </li>
                          <li<?php echo $navbar_page == 'dana' ? ' class="active"' : ''?>><a href="<?=site_url('dana'); ?>">Dana Komunitas</a></li>
                          <li<?php echo $navbar_page == 'pendana' ? ' class="active"' : ''?>><a href="<?=site_url('pendana'); ?>">Pendana</a></li>
                          <li<?php echo $navbar_page == 'login' ? ' class="active"' : ''?>><a href="https://portal.kreditpro.id/login">Log In</a></li>
                          <li<?php echo $navbar_page == 'signup' ? ' class="active"' : ''?>><a href="https://portal.kreditpro.id/login">Sign Up</a></li>
                          <li class="language-btn dropdown">
                              <a href="#" class="dropdown-toggle" data-toggle="dropdown"><img src="<?=base_url('style/images/'. ((strtolower(get_cookie('LANG')) == 'id') ? 'id' : 'id') .'.png');?>" /> <span class="caret"></span></a>
                              <ul class="dropdown-menu">
                                  <li class="dropdown-item"><a href=""><img src="<?=base_url('style/images/id.png');?>" class="img-language" /> Indonesian</a></li>
                                  <li class="dropdown-item"><a href=""><img src="<?=base_url('style/images/en.png');?>" class="img-language" /> English</a></li>
                              </ul>
                          </li>
                      </ul>
                  </div>
              </div>
          </div>
      </div>
    <router-view></router-view>
    <footer/>
  </div>
</template>
