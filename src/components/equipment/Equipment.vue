<template>
  <div>
    <v-content>
      <v-container>
        <v-layout row>
          <v-flex class="teal darken-2" elevation-5>
            <p class="white--text text-center text-uppercase font-weight-bold ma-0 py-5 ">Base de Datos de usuarios por equipo</p>
          </v-flex>
        </v-layout>
        <v-layout row class="justify-space-around">
          <v-flex xs5 sm5 py-4>
            <p class="title">Equipo: {{ userData.equip_id }}</p>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
        <v-layout row class="justify-center">
          <v-simple-table>
            <thead>
              <tr>
                <th class="text-left">Usuario</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in users" :key="item.name">
                <td>{{ item.name }}</td>
              </tr>
            </tbody>
          </v-simple-table>
        </v-layout>
      </v-container>
    </v-content>
  </div>
</template>

<script src='./DataTemplate.js' />
