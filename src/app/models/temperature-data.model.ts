export class TemperatureData {
  date?: string
  temperature?: number

  constructor(data: any){
    Object.assign(this, data)
    if(data.temperature)
      this.temperature = parseFloat(data.temperature)
  }
}
