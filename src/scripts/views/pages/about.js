const About = {
  async render() {
    return `
        <div class="content">
          <div class="head-div"> 
            <h3>Adi Munawar</h3>
            <h5>Interact, collaborate and learn with Designers and Developers around the world!</h5>
            </div>
            <div class="link-div"> 
                <a href="https://adi31.vercel.app/" target="_blank" rel="noreferrer" class="alink">Website</a>
                <a href="https://github.com/AdiMunawar31" target="_blank" rel="noreferrer" class="alink">Github</a>
                <a href="https://www.linkedin.com/in/adi-munawar-2359601b2/" target="_blank" rel="noreferrer" class="alink">LinkedIn</a>
            </div>
        </div>
      `;
  },

  async afterRender() {},
};

export default About;
