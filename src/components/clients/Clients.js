const fb = require('../../firebaseConfig.js')

export default {
  name: 'Clients',
  data () {
    return {
      clientCollection: [],
      pathEquipmentData: '',
      pathUserData: ''
    }
  },
  computed: {
    selectedEquipment () {
      return this.pathEquipmentData
    },
    selectedUser () {
      return this.pathUserData
    }
  },
  created () {
    const path = this.$route.path.split('/')
    this.pathEquipmentData = path[path.length - 2]
    this.pathUserData = path[path.length - 1]
    this.retrieveClientCollection(this.pathUserData)
  },
  methods: {
    async retrieveClientCollection (element) {
      let results = []
      await fb.clientsCollection.where("user_id", "==", element)
        .get()
        .then(function (querySnapshot) {
          querySnapshot.forEach(function (response) {
            results.push(response.data())
          })
        })
      this.clientCollection = results
    }
  }
}
