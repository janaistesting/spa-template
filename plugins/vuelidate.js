import vuelidate from "vuelidate";
import Vue from "vue";
import vuelidateErrorExtractor, { templates } from "vuelidate-error-extractor";

Vue.use(vuelidate);

Vue.use(vuelidateErrorExtractor, {
  /**
   * Optionally provide the template in the configuration.
   * or register like so Vue.component("FormField", templates.singleErrorExtractor.foundation6)
   */
  template: templates.singleErrorExtractor.foundation6, // you can also pass your own custom template
  messages: { required: "The {attribute} field is required" }, // error messages to use
  attributes: { // maps form keys to actual field names
    email: "Email",
    first_name: "First name",
    last_name: "Last name"
  }
});
