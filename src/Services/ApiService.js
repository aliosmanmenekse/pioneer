import ApiEnums from '../Enums/ApiEnums'

class ApiService {
  /**
   * @name fetchElements
   * @return {array<object>}
   */
  async fetchElements () {
    const response = await window.fetch(ApiEnums.GET_ELEMENTS)
    const data = await response.json()

    return data
  }

  /**
   * @name getElementStatistics
   * @return {array<object>}
   */
  async getElementStatistics () {
    const response = await window.fetch(ApiEnums.GET_ELEMENT_STATISTICS)
    const data = await response.json()

    return data
  }
}

export default new ApiService()
