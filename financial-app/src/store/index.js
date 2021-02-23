import { createStore } from 'vuex'

export default createStore({
  state: {
    username: "",
    password: "",
    isAuthenticated: null,
    creditExampleAmount: 0,
    creditExampleDuration: 0,
    resultMin: 0,
    resultMax: 0,
    // monthlyRateMin: null,
    // monthlyRateMax: null,
    creditPurpose: "",
    comments: "",
    loanAmount: "",
    loanDuration: "",
    applicant: "",
    maritalStatus: "",
    sameHouseholdStatus: "",
    applicantTitle: "",
    partnerTitle: "",
    applicantFirstName: "",
    applicantLastName: "",
    partnerFirstName: "",
    partnerLastName: "",
    dateOfBirth: "",
    nationality: "",
    residence: "",
    residentPeriod: "",
  },
  getters: {
    monthlyRateMin(state) {
      return Math.round(state.resultMin);
    },
    monthlyRateMax(state) {
      return Math.round(state.resultMax);
    }
  },
  mutations: {
    getLoginData(state, payload) {
      state.username = payload.username;
      state.password = payload.password;
    },
    getCalcData(state, payload) {
      state.creditExampleAmount = payload.creditExampleAmount;
      state.creditExampleDuration = payload.creditExampleDuration
      state.resultMin = payload.resultMin;
      state.resultMax = payload.resultMax
    },
    getStepOneData(state, payload) {
      state.creditPurpose = payload.creditPurpose;
      state.comments = payload.comments;
      state.loanAmount = payload.loanAmount;
      state.loanDuration = payload.loanDuration;
    },
    getStepTwoData(state, payload) {
      state.applicant = payload.applicant;
      state.maritalStatus = payload.maritalStatus;
      state.sameHouseholdStatus = payload.sameHouseholdStatus;
    },
    getStepThreeData(state, payload) {
      console.log(state, 'state get step three data')
      state.applicantTitle = payload.applicantTitle;
      state.partnerTitle = payload.partnerTitle;
      state.applicantFirstName = payload.applicantFirstName;
      state.partnerFirstName = payload.partnerFirstName;
      state.partnerLastName = payload.partnerLastName;
      state.applicantLastName = payload.applicantLastName;
    },
    getStepFourData(state, payload) {
      console.log(state, 'state get step four data')
      state.dateOfBirth = payload.dateOfBirth;
      state.nationality = payload.nationality;
      state.residence = payload.residence;
      state.applicantLastName = payload.applicantLastName;
      state.residentPeriod = payload.residentPeriod;
    },
    authenticateUser(state, payload) {
      state.isAuthenticated = payload
    }
  },
  actions: {
    getLoginData({ commit }, payload) {
      commit('getLoginData', payload);
    },
    getCalcData({ commit }, payload) {
      commit('getCalcData', payload);
    },
    getStepOneData({ commit }, payload) {
      commit('getStepOneData', payload);
    },
    getStepTwoData({ commit }, payload) {
      commit('getStepTwoData', payload)
    },
    getStepThreeData({ commit }, payload) {
      commit('getStepThreeData', payload);
    },
    getStepFourData({ commit }, payload) {
      commit('getStepFourData', payload);
    },
    authenticateUser({ commit }, payload) {
      commit('authenticateUser', payload)
    }
  },
  modules: {
  }
})
