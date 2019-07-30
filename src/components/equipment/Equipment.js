const fb = require('../../firebaseConfig.js')

export default {
  name: 'Equipment',
  data () {
    return {
      userCollection: [],
      pathEquipmentData: ''
    }
  },
  computed: {
    selectedEquipment () {
      return this.pathEquipmentData
    }
  },
  created () {
    const path = this.$route.path.split('/')
    this.pathEquipmentData = path[path.length - 1]
    this.retrieveUserCollection(this.pathEquipmentData)
  },
  methods: {
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
    }
  }
}
