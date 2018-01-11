import logo from '../assets/images/logo.png';
import backImage from '../assets/images/back1.jpg';

import { AirportsService } from '../services/airports.service';

class HomeController {
  constructor() {
    this.logo = logo
    this.backImage = backImage
    debugger
    this.airportsService = AirportsService()
  }
}

export default HomeController
