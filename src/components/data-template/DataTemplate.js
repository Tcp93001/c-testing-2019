import { mapGetters, mapActions } from 'vuex'
const fb = require('../../firebaseConfig.js')

export default {
  name: 'DataTemplate',
  data () {
    return {
      data: null,
      userCollection: [],
      firstSelect: null,
      secondSelect: null
    }
  },
  computed: {
    ...mapGetters([
      'getUsersCollection',
      'getClientsCollection',
      'getEquipmentCollection'
    ]),
    firstSelectValue () {
      this.firstSelect = value
      return this.firstSelect
    },
    secondSelectValue () {
      if (this.firstSelect) {
        console.log('exito')
      }
    }
  },
  created () {
    this.retrieveUserCollection()
  },
  methods: {
    ...mapActions([
      'accessUsersCollection'
    ]),
    async retrieveUserCollection () {
      let results = []
      await fb.usersCollection.get().then(function (querySnapshot) {
        querySnapshot.forEach(function(response) {
            // doc.data() is never undefined for query doc snapshots
            results.push(response.data());
        })
      })
      const data = results.map(elem => {
        return elem.eq_id
      })
      this.userCollection = data
      console.log(this.userCollection)
    }
  }
}
