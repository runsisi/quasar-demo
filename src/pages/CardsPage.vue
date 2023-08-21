<script setup lang="ts">

import {ref} from 'vue'

const strictly = ref(false)
const functional = ref(false)
const performance = ref(false)

</script>

<template>

<q-page class="q-pa-lg">
  <div class="row q-col-gutter-md">
    <div class="col-12">
      <q-card class="no-shadow card_style bg-transparent">
        <q-card-section class="q-px-none q-pt-none q-mb-sm">
          <div class="text-subtitle1">Cards</div>
        </q-card-section>
      </q-card>
    </div>

    <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
      <q-card bordered class="no-shadow card_style">
        <q-card-section>
          <div class="text-subtitle1">Create an account</div>
          <div class="text-grey-8 text-caption">Enter your email below to create your account</div>
        </q-card-section>

        <q-card-section class="q-py-none">
          <div class="row q-col-gutter-sm">
            <div class="col">
              <q-btn no-caps outline color="dark"
                     icon="fab fa-github"
                     label="Github"
                     class="full-width card_style"
              >
              </q-btn>
            </div>

            <div class="col">
              <q-btn no-caps outline color="dark"
                     icon="fab fa-google"
                     label="Google"
                     class="full-width card_style"
              >
              </q-btn>
            </div>
          </div>
        </q-card-section>

        <q-card-section class="q-py-none">
          <q-item class="q-px-none">
            <q-item-section>
              <q-item-label class="q-mb-sm text-grey-7">Email</q-item-label>
              <q-input outlined dense class="no-shadow card_style"></q-input>
            </q-item-section>
          </q-item>
          <q-item class="q-px-none">
            <q-item-section>
              <q-item-label class="q-mb-sm text-grey-7">Password</q-item-label>
              <q-input type="password" outlined dense class="no-shadow card_style"></q-input>
            </q-item-section>
          </q-item>
        </q-card-section>

        <q-card-section>
          <q-btn no-caps color="dark" class="full-width card_style" label="Create account"></q-btn>
        </q-card-section>
      </q-card>

      <q-card bordered class="q-mt-md card_style no-shadow">
        <q-card-section>
          <div class="text-subtitle1">Team Members</div>
          <div class="text-grey-8 text-caption">Invite your team members to collaborate.</div>
        </q-card-section>

        <q-card-section class="q-pa-none">
          <q-list>
            <q-item clickable class="q-py-none q-pr-none">
              <q-item-section side>
                <q-avatar>
                  <img src="https://cdn.quasar.dev/img/avatar.png" />
                </q-avatar>
              </q-item-section>
              <q-item-section>
                <q-item-label>Sofia Davis</q-item-label>
                <q-item-label class="text-grey-7">sofiadavis@example.com</q-item-label>
              </q-item-section>
              <q-card-section>
                <q-btn-dropdown auto-close no-caps label="Member" color="dark" class="card_style" content-class="card_style">
                  <q-list>
                    <q-item clickable>
                      <q-item-section>
                        <q-item-label>Viewer</q-item-label>
                        <q-item-label caption class="text-caption">Can view and comment.</q-item-label>
                      </q-item-section>
                    </q-item>
                    <q-item clickable>
                      <q-item-section>
                        <q-item-label>Developer</q-item-label>
                        <q-item-label caption class="text-caption">Can view, comment and edit.</q-item-label>
                      </q-item-section>
                    </q-item>
                    <q-item clickable>
                      <q-item-section>
                        <q-item-label>Billing</q-item-label>
                        <q-item-label caption class="text-caption">Can view, comment and manage billing.</q-item-label>
                      </q-item-section>
                    </q-item>
                  </q-list>
                </q-btn-dropdown>
              </q-card-section>
            </q-item>

            <q-item clickable class="q-py-none q-pr-none">
              <q-item-section side>
                <q-avatar>
                  <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
                </q-avatar>
              </q-item-section>
              <q-item-section>
                <q-item-label>Jackson Lee</q-item-label>
                <q-item-label class="text-grey-7">jacksonlee@example.com</q-item-label>
              </q-item-section>
              <q-card-section>
                <q-btn-dropdown auto-close no-caps label="Owner" color="dark" class="card_style" content-class="card_style">
                  <q-list class="card_style">
                    <q-item clickable>
                      <q-item-section>
                        <q-item-label>Viewer</q-item-label>
                        <q-item-label caption class="text-caption">Can view and comment.</q-item-label>
                      </q-item-section>
                    </q-item>
                    <q-item clickable>
                      <q-item-section>
                        <q-item-label>Developer</q-item-label>
                        <q-item-label caption class="text-caption">Can view, comment and edit.</q-item-label>
                      </q-item-section>
                    </q-item>
                    <q-item clickable>
                      <q-item-section>
                        <q-item-label>Billing</q-item-label>
                        <q-item-label caption class="text-caption">Can view, comment and manage billing.</q-item-label>
                      </q-item-section>
                    </q-item>
                  </q-list>
                </q-btn-dropdown>
              </q-card-section>
            </q-item>
          </q-list>
        </q-card-section>
      </q-card>
    </div>

    <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
      <q-card bordered class="card_style no-shadow">
        <q-card-section>
          <div class="text-subtitle1">Notifications</div>
          <div class="text-grey-8 text-caption">Choose what you want to be notified about.</div>
        </q-card-section>

        <q-card-section class="q-pa-none">
          <q-list>
            <q-item clickable class="q-px-none q-pb-none">
              <q-card-section side>
                <q-icon name="las la-bell" size="24px"></q-icon>
              </q-card-section>
              <q-item-section>
                <q-item-label class="text-grey-7">Everything</q-item-label>
                <q-item-label>Email digest, mentions & all activity.</q-item-label>
              </q-item-section>
            </q-item>

            <q-item clickable class="q-px-none q-pb-none">
              <q-card-section side>
                <q-icon name="las la-at" size="24px"></q-icon>
              </q-card-section>
              <q-item-section>
                <q-item-label class="text-grey-7">Available</q-item-label>
                <q-item-label>Only mentions and comments.</q-item-label>
              </q-item-section>
            </q-item>

            <q-item clickable class="q-px-none">
              <q-card-section side>
                <q-icon name="las la-bell-slash" size="24px"></q-icon>
              </q-card-section>
              <q-item-section>
                <q-item-label class="text-grey-7">Ignoring</q-item-label>
                <q-item-label>Turn off all notifications.</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-card-section>
      </q-card>

      <q-card bordered class="card_style no-shadow q-mt-md">
        <q-card-section class="q-pb-none">
          <div class="text-subtitle1">Share this document</div>
          <div class="text-grey-8 text-caption">Anyone with the link can view this document.</div>
        </q-card-section>

        <q-separator class="q-mx-md q-my-md"/>

        <q-card-section class="q-pa-none">
          <q-list>
            <q-item-label header class="q-py-none text-dark">People with access</q-item-label>

            <q-item clickable class="q-py-none q-pr-none">
              <q-item-section side>
                <q-avatar>
                  <img src="https://cdn.quasar.dev/img/avatar.png" />
                </q-avatar>
              </q-item-section>
              <q-item-section>
                <q-item-label>Olivia Martin</q-item-label>
                <q-item-label class="text-grey-7">m@example.com</q-item-label>
              </q-item-section>
              <q-card-section>
                <q-btn-dropdown auto-close label="Can Edit" no-caps color="dark" class="card_style" content-class="card_style">
                  <q-list>
                    <q-item clickable>
                      <q-item-section>
                        <q-item-label>Can Edit</q-item-label>
                      </q-item-section>
                    </q-item>
                    <q-item clickable>
                      <q-item-section>
                        <q-item-label>Can View</q-item-label>
                      </q-item-section>
                    </q-item>
                  </q-list>
                </q-btn-dropdown>
              </q-card-section>
            </q-item>

            <q-item clickable class="q-py-none q-pr-none">
              <q-item-section side>
                <q-avatar>
                  <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
                </q-avatar>
              </q-item-section>
              <q-item-section>
                <q-item-label>Isabella Nguyen</q-item-label>
                <q-item-label class="text-grey-7">b@example.com</q-item-label>
              </q-item-section>
              <q-card-section>
                <q-btn-dropdown auto-close label="Can View" no-caps color="dark" class="card_style" content-class="card_style">
                  <q-list>
                    <q-item clickable>
                      <q-item-section>
                        <q-item-label>Can Edit</q-item-label>
                      </q-item-section>
                    </q-item>
                    <q-item clickable>
                      <q-item-section>
                        <q-item-label>Can View</q-item-label>
                      </q-item-section>
                    </q-item>
                  </q-list>
                </q-btn-dropdown>
              </q-card-section>
            </q-item>

            <q-item clickable class="q-py-none q-pr-none">
              <q-item-section side>
                <q-avatar>
                  <img src="https://cdn.quasar.dev/img/avatar3.jpg" />
                </q-avatar>
              </q-item-section>
              <q-item-section>
                <q-item-label>Sofia Davis</q-item-label>
                <q-item-label class="text-grey-7">p@example.com</q-item-label>
              </q-item-section>
              <q-card-section>
                <q-btn-dropdown auto-close label="Can Edit" no-caps color="dark" class="card_style" content-class="card_style">
                  <q-list>
                    <q-item clickable>
                      <q-item-section>
                        <q-item-label>Can Edit</q-item-label>
                      </q-item-section>
                    </q-item>
                    <q-item clickable>
                      <q-item-section>
                        <q-item-label>Can View</q-item-label>
                      </q-item-section>
                    </q-item>
                  </q-list>
                </q-btn-dropdown>
              </q-card-section>
            </q-item>
          </q-list>
        </q-card-section>
      </q-card>
    </div>

    <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
      <q-card bordered class="no-shadow card_style">
        <q-card-section>
          <div class="text-subtitle1">Cookie Settings</div>
          <div class="text-grey-8 text-caption">Manage your cookie settings here.</div>
        </q-card-section>

        <q-card-section class="q-pa-none">
          <q-list>
            <q-item clickable>
              <q-item-section>
                <q-item-label>Strictly Necessary</q-item-label>
                <q-item-label class="text-grey-7"
                              style="overflow: hidden; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 2;"
                >
                  These cookies are essential in order to use the website and use its features.
                </q-item-label>
              </q-item-section>
              <q-card-section>
                <q-toggle v-model="strictly"></q-toggle>
              </q-card-section>
            </q-item>

            <q-item clickable>
              <q-item-section>
                <q-item-label>Functional Cookies</q-item-label>
                <q-item-label class="text-grey-7"
                              style="overflow: hidden; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 2;"
                >
                  These cookies allow the website to provide personalized functionality.
                </q-item-label>
              </q-item-section>
              <q-card-section>
                <q-toggle v-model="functional"></q-toggle>
              </q-card-section>
            </q-item>

            <q-item clickable>
              <q-item-section>
                <q-item-label>Performance Cookies</q-item-label>
                <q-item-label class="text-grey-7"
                              style="overflow: hidden; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 2;"
                >
                  These cookies help to improve the performance of the website.
                </q-item-label>
              </q-item-section>
              <q-card-section>
                <q-toggle v-model="performance"></q-toggle>
              </q-card-section>
            </q-item>
          </q-list>
        </q-card-section>
      </q-card>

      <q-card bordered class="no-shadow card_style q-mt-md">
        <q-card-section class="q-px-none">
          <q-item>
            <q-item-section>
              <q-item-label class="text-subtitle1">Quasar Minimalist Design</q-item-label>
              <q-item-label class="text-caption text-grey-8"
                            style="overflow: hidden; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 2;"
              >
                Beautifully designed components built with Quasar Framework.
              </q-item-label>
            </q-item-section>

            <q-item-section side>
              <q-btn-dropdown split label="Star" icon="star" no-caps color="dark" class="card_style" content-class="card_style">
              </q-btn-dropdown>
            </q-item-section>
          </q-item>
        </q-card-section>

        <q-card-actions>
          <q-btn flat round icon="event"></q-btn>
          <q-btn flat no-caps label="Updated April 2023"></q-btn>
          <q-btn flat label="10k"></q-btn>
        </q-card-actions>
      </q-card>
    </div>
  </div>
</q-page>

</template>

<style scoped lang="scss">

</style>
