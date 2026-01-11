<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Photo Gallery</ion-title>
        <ion-h1>โดย พีรัชชัย สืบสิงห์</ion-h1>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Photo Gallery</ion-title>

        </ion-toolbar>
      </ion-header>

      <!-- CHANGE: Add the floating action button -->
      <ion-fab vertical="bottom" horizontal="center" slot="fixed">
        <ion-fab-button>
          <ion-icon :icon="camera"></ion-icon>
        </ion-fab-button>
      </ion-fab>

      <!-- CHANGE: Remove or comment out <ExploreContainer /> -->
      <!-- <ExploreContainer name="Tab 2 page" /> -->
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
// CHANGE: Add import from `ionicons/icons`
import { camera } from 'ionicons/icons';
// CHANGE: Update import from `@ionic/vue` to include necessary Ionic components
import { IonPage, IonHeader, IonFab, IonFabButton, IonIcon, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
// CHANGE: Remove or comment out the ExploreContainer import
// import ExploreContainer from '@/components/ExploreContainer.vue';
</script>
