<template>
  <div>
    <v-content>
      <v-container>
        <v-layout row>
          <v-flex class="teal darken-2" elevation-5>
            <p class="white--text text-center text-uppercase font-weight-bold ma-0 py-5 ">Base de Datos de usuarios</p>
          </v-flex>
        </v-layout>
        <v-layout row class="justify-space-around">
          <v-flex xs5 sm5 py-4>
              <v-select
                :items="equipmentCollection"
                :item-text="equipmentCollection.text"
                :item-value="equipmentCollection.value"
                label="Equipo"
                v-model="setEquipmentSelect"
              ></v-select>
          </v-flex>

          <v-flex xs5 sm5 py-4>
              <v-select
                :items="userSelection"
                :item-text="userSelection.text"
                :item-value="userSelection.value"
                label="Usuario"
                v-model='setUserSelect'
              ></v-select>
          </v-flex>
        </v-layout>
        <v-layout row class="justify-center">
          <v-data-table
            dark
            :headers="headers"
            :items="userData"
            hide-default-footer
            class="elevation-1"
            pagination.sync="pagination"
            item-key="id"
            loading="true"
          ></v-data-table>
        </v-layout>
      </v-container>
    </v-content>
  </div>
</template>

<script src='./Clients.js' />
