<template>
  <div>
  <b-row>
    <b-col lg="3">
      <b-form-group description="Search">
        <b-input-group>
            <b-input-group-prepend is-text>
              <b-icon-search></b-icon-search>
            </b-input-group-prepend>
            <b-form-input v-model="filter" placeholder="Keywords" type="search"/>
            <b-input-group-append role='button' v-b-tooltip.hover title="Reset the search box" is-text @click="resetSearch">
            Clear
            </b-input-group-append>
        </b-input-group>
      </b-form-group>
    </b-col>
  </b-row>
    <b-table striped hover :items="items" :filter="filter" :busy="isBusy" :fields="fields" :current-page="currentPage" :per-page="perPage"  selectable @filtered="onFiltered">
      <template #table-busy>
        <div class="text-center text-danger my-2">
          <b-spinner class="align-middle"></b-spinner>
          <strong>Loading...</strong>
        </div>
      </template>
      <template #cell(selected)="{ rowSelected }">
        <template v-if="rowSelected">
          <span aria-hidden="true">&check;</span>
          <span class="sr-only">Selected</span>
        </template>
        <template v-else>
          <span aria-hidden="true">&nbsp;</span>
          <span class="sr-only">Not selected</span>
        </template>
      </template>
      <template #cell(actions)="row">
        <b-button size="sm" @click="onEditItem(row.item)" class="mr-1">
          Edit
        </b-button>
        <b-button size="sm" @click="onDelete(row.item)" class="mr-1">
          Delete
        </b-button>
      </template>
    </b-table>
    <div class="overflow-auto">
          <b-form inline>
            <b-pagination class="mb-0 mr-sm-0 mb-sm-0" v-model="currentPage" :total-rows="totalRows" :per-page="perPage"></b-pagination>
            <b-form-select v-b-tooltip.hover.right title="Number of items per page" class="ml-2" v-model="perPage" :options="[5,10,15]"></b-form-select>
          </b-form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "Table",
  props: {},
  data() {
    return {
      isBusy:true,
      currentPage:1,
      perPage:5,
      totalRows:1,
      fields: [{key:'selected'},{key:'id',sortable:true}, {key:'first_name',sortable:true}, {key:'last_name',sortable: true}, {key:'age',sortable:true},{key:'actions'}],
      items: [],
      filter:'',
    }
  },
  mounted() {
    axios.get('http://localhost:3000/persons').then(response =>
        this.items = response.data
    )
        .catch(error => console.log(error))
        .finally(()=> {
              this.isBusy = false
              this.totalRows = this.items.length
            }
        )
  },
  methods: {
    resetSearch: function(){
      this.filter=''
    },
    onFiltered(filteredItems){
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length
      this.currentPage = 1
    },
    onDelete(removeItem){
      axios.delete("http://localhost:3000/persons/"+removeItem.id)
          .then(() => {
            var filteredItems = this.items.filter(item => item.id != removeItem.id)
            this.items = filteredItems})
          .catch(error => console.log(error.response.data))

    },
    onEditItem(item){
      this.$router.push({name:'edit-person',params:{id:item.id}})
    }
  }
}
</script>

<style scoped>

</style>