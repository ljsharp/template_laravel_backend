<script setup>
import App from "@/Layouts/App.vue";
import DeleteUserForm from "@/Pages/Profile/Partials/DeleteUserForm.vue";
import JetSectionBorder from "@/Jetstream/SectionBorder.vue";
import LogoutOtherBrowserSessionsForm from "@/Pages/Profile/Partials/LogoutOtherBrowserSessionsForm.vue";
import TwoFactorAuthenticationForm from "@/Pages/Profile/Partials/TwoFactorAuthenticationForm.vue";
import UpdatePasswordForm from "@/Pages/Profile/Partials/UpdatePasswordForm.vue";
import UpdateProfileInformationForm from "@/Pages/Profile/Partials/UpdateProfileInformationForm.vue";

defineProps({
  confirmsTwoFactorAuthentication: Boolean,
  sessions: Array,
});
</script>

<template>
  <app title="Profile">
    <template #header>
      <h2 class="font-semibold text-xl text-gray-800 leading-tight">Profile</h2>
    </template>

    <div>
      <div class="w-8/12 sm:w-11/12 mx-auto py-10 sm:px-6 lg:px-8">
        <div
          class="mb-5"
          v-if="$page.props.jetstream.canUpdateProfileInformation"
        >
          <UpdateProfileInformationForm :user="$page.props.user" />

          <JetSectionBorder />
        </div>

        <div class="mb-5" v-if="$page.props.jetstream.canUpdatePassword">
          <UpdatePasswordForm class="mt-10 sm:mt-0" />

          <JetSectionBorder />
        </div>

        <div
          class="mb-5"
          v-if="$page.props.jetstream.canManageTwoFactorAuthentication"
        >
          <TwoFactorAuthenticationForm
            :requires-c0nfirmation="confirmsTwoFactorAuthentication"
            class="mt-10 sm:mt-0"
          />

          <JetSectionBorder />
        </div>

        <LogoutOtherBrowserSessionsForm
          :sessions="sessions"
          class="mt-10 sm:mt-3"
        />

        <template v-if="$page.props.jetstream.hasAccountDeletionFeatures">
          <JetSectionBorder />

          <DeleteUserForm class="mt-10 sm:mt-0" />
        </template>
      </div>
    </div>
  </app>
</template>
