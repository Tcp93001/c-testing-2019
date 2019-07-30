const fb = require('../../firebaseConfig.js')

export default {
  name: 'Clients',
  data () {
    return {
      userCollection: [],
      equipmentCollection: [],
      clientCollection: [],
      userData: [
        {
          equipment: null,
          user: null,
          email: null,
          user_id: null
        }
      ],
      headers: [
        { text: 'Equipo', align: 'center', value: 'equipment' },
        { text: 'Usuario', value: 'user' },
        { text: 'Correo', value: 'email' },
        { text: 'Número de usuario', value: 'user_id' }
      ]
    }
  },
  computed: {
    userSelection () {
      return this.userCollection
    },
    setEquipmentSelect: {
      get () {
        return this.equipmentCollection
      },
      set (value) {
        this.userData = [{
          equipment: null,
          user: null,
          email: null,
          user_id: null
        }]
        let sentData
        if (this.$route.path) {
          const path = this.$route.path
          const eq_id = path.split("/")
          this.userData[0].equipment = eq_id[2]
          sentData = eq_id[2]
        } else {
          sentData = value
          this.userData[0].equipment = value
        }
        this.retrieveUserCollection(sentData)
      }
    },
    setUserSelect: {
      get () {
        return this.userCollection
      },
      set (value) {
        const data = this.userCollection.filter(elem => {
          return elem.value === value
        })
        this.userData[0].user = data[0].text
        this.retrieveClientCollection(value)
      }
    }
  },
  created () {
    this.retrieveEquipmentCollection()
  },
  methods: {
    async retrieveEquipmentCollection () {
      let results = []
      await fb.equipmentCollection.get().then(function (querySnapshot) {
        querySnapshot.forEach(function (response) {
          results.push(response.data())
        })
      })
      const data = results.map(elem => {
        return {
          text: elem.eq_id,
          value: elem.eq_id
        }
      })
      this.equipmentCollection = data
    },

    async retrieveUserCollection (element) {
      let results = []
      await fb.usersCollection.where("eq_id", "==", element)
        .get()
        .then(function (querySnapshot) {
          querySnapshot.forEach(function (response) {
            results.push(response.data())
          })
        })
      const data = results.map(elem => {
        return {
          text: elem.name,
          value: elem.user_id
        }
      })
      this.userCollection = data
    },

    async retrieveClientCollection (element) {
      let results = []
      await fb.clientsCollection.where("user_id", "==", element)
        .get()
        .then(function (querySnapshot) {
          querySnapshot.forEach(function (response) {
            results.push(response.data())
          })
        })
      this.userData[0].email = results[0].email
      this.userData[0].user_id = results[0].user_id
      this.clientCollection = results
    }
  }
}
