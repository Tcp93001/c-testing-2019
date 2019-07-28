<template>
  <div>
    <v-content>
      <v-container>
        <v-layout row>
          <v-flex class="teal darken-2" elevation-5>
            <p class="white--text text-center text-uppercase font-weight-bold ma-0 py-5 ">Base de Datos de usuarios</p>
          </v-flex>
        </v-layout>
        <v-layout row class="justify-center">
          <div class="py-5">
            <v-select
              :items="userCollection"
              label="Equipo"
              item-value="firstSelectValue"
            ></v-select>
            <v-select
              :items="userCollection"
              label="Usuario"
              value
              item-value="secondSelectValue"
            ></v-select>
          </div>
        </v-layout>
        <!-- <v-layout row>
          <v-data-table
            headers="headers"
            items="items"
            hide-actions
            class="elevation-1"
            select-all
            pagination.sync="pagination"
            item-key="id"
            loading="true"
            search="search"
          >

          </v-data-table>
        </v-layout> -->
      </v-container>
    </v-content>
  </div>
</template>

<script src='./DataTemplate.js' />
