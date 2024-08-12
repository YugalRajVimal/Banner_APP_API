import { getBannerDetails, updateBannerDetails } from "./mysqlDB.js";

class bannerController {
  async getDetails(req, res) {
    const result = await getBannerDetails();
    res.send(result);
  }

  async updateDetails(req, res) {
    try {
      const bannerDetails = req.body;
      await updateBannerDetails(bannerDetails);
      return;
    } catch (error) {
      console.error(error);
      return error;
    }
  }
}

export default bannerController;
