import * as enums from './Enums.js'

export default class TxtMsgMaker {
  constructor(paramValues) {
    this.candidateName = ''
    this.timeOfDay = ''
    this.myName = ''
    this.speakerName = ''
    this.location = ''
    this.time = ''
    this.day = ''
    this.address = ''
    this.personalMsg = ''
    this.txtMsg = ''
    this.timeOfDay = this.getTimeOfDay()

    this.txtMsgType = enums.TxtMsgType

    setInterval( () => {
      this.timeOfDay = this.getTimeOfDay()
    },1000)
    
  }


  setParamUsing(text, txtMsgParamType) {
    switch(txtMsgParamType) {
      case enums.TxtMsgParamType.CANDIDATE_NAME:
        this.candidateName = text
        break
      case enums.TxtMsgParamType.MY_NAME:
        this.myName = text
        break
      case enums.TxtMsgParamType.LOCATION:
        this.location = text
        break
      case enums.TxtMsgParamType.TIME:
        this.time = text
        break
      case enums.TxtMsgParamType.DAY:
        this.day = text
        break
      case enums.TxtMsgParamType.ADDRESS:
        this.address = text
        break
      case enums.TxtMsgParamType.SPEAKER_NAME:
        this.speakerName = text
        break
    }
  }

  getTimeOfDay() {
    var currentHour = new Date().getHours().toString()
    var currentMinutes = new Date().getMinutes().toString()
    var currentSeconds = new Date().getSeconds()
    var currentTime = new Date().toLocaleTimeString()
    var timeOfDay = ''

    if (currentHour >= 0 && currentHour < 12) {
      
      timeOfDay = 'morning'
    } else if (currentHour >= 12 && currentHour < 18) {
      timeOfDay = 'afternoon'
    } else if (currentHour >= 18 && currentHour < 24) {
      timeOfDay = 'evening'
    }
    
    return timeOfDay
  }

  asdf() {
    
  }

  makeTxtMsgWith(txtMsgType) {
    switch (txtMsgType) {
      case enums.TxtMsgType.CONFIRM_PHONE_NUMBER:
        return "Good " + this.timeOfDay + " " + this.candidateName + ", this is " + this.myName + ". We met at " + this.location + " today. Just double checking if I have the right number :)"
      case enums.TxtMsgType.CHECK_AVAILABILITY:
        return "Good " + this.timeOfDay + " " + this.candidateName + ", hope you're well. Let's try to find some time to sit down soon. How does your availability in the evening look this upcoming week?"
      case enums.TxtMsgType.SETUP_MG1:
        return "Good to hear from you " + this.candidateName + " I may have some availability on " + this.day + " at " + this.time + ". Let me know how that looks on your end."
      case enums.TxtMsgType.PRE_CONFIRM_MG1:
        return "Sounds good " + this.candidateName + ". Let me double check and I'll send you a confirmation text by, at the latest, tomorrow night. Sound good?"
      case enums.TxtMsgType.CONFIRM_MG1:
        return "Good " + this.timeOfDay + " " + this.candidateName + ", just wanted to send you a confirmation text that " + this.day + " at " + this.time + " works for me. Let's meet at " + this.location + " at this address: " + this.address + ". Let me know if that works!"
      case enums.TxtMsgType.BOOK_FINISHED:
        return "Good to hear from you " + this.candidateName + ", hope you're having an amazing " + this.timeOfDay + " so far. Awesome to hear that you finished the book! How'd you like it?"
      case enums.TxtMsgType.BOOK_NOT_FINISHED:
        return "Good " + this.timeOfDay + " " + this.candidateName + ", hope you're well. I didn't hear from you " + this.day + " so wanted to reach out to see whether you finished the book or not. Let me know :) Will be waiting to hear from you."
      case enums.TxtMsgType.CONFIRM_MG2:
        return "Since you finished the book, let's go ahead and sit down. Does " + this.time + " on " + this.day + " still work for you? Let me know!"
      case enums.TxtMsgType.CONFIRM_BP1:
        return "Good " + this.timeOfDay + " " + this.candidateName + ", hope you're well. So, I did some leg work and was able to reserve a spot for you this " + this.day + " evening. \n\nThis is a huge deal and speaks a lot about your character and potential. Congratulations! \n\nDetails:\n•business attire\n•8pm-10:30pm\n•arrive 15 min early for parking \n•bring a notebook to take notes, and a great attitude!\n\nAddress: " + this.address + "\n\n" + this.speakerName + " is looking forward to sharing more of his story with you and breaking down the education " + this.day +" evening! I'll see you then? "
      case enums.TxtMsgType.DUE_DILIGENCE:
        return "Good " + this.timeOfDay + " " + this.candidateName + ", so awesome seeing you yesterday. Here are some more resources to do your due diligence and I highly recommend listening to both of the audios before we sit down on " + this.day + " at " + this.time + ".\n\nHere is the link: https://www.wwdb.com/u/d8af3\n\nLet me know if you have any questions and have an amazing rest of your day!"
      case enums.TxtMsgType.CONFIRM_BP2:
        return "Good " + this.timeOfDay + " " + this.candidateName + ", hope you're well. I was able to reserve a spot for you this " + this.day + " evening. So excited for you! \n\nHere are the details again:\n•business attire\n•8pm-10:30pm\n•arrive 15 min early for parking \n•bring a notebook to take notes, and a great attitude!\n\nAddress: " + this.address + "\n\n" + this.speakerName + " is looking forward to sharing more of his story with you and breaking down the education " + this.day +" evening! I'll see you then? "
      case enums.TxtMsgType.NO_RESPONSE:
        return "Good " + this.timeOfDay + " " + this.candidateName + ", this is " + this.myName + ". I didn't hear from you " + this.day + " so wanted to reach out. Did you get my last text message?"
    }
  }





  


}





// componentDidMount() {
//   setInterval( () => {
//       this.txtMsgCreator.timeOfDay =  new GreetingsCreator().getTimeOfDay()
//   },1000)
// }
