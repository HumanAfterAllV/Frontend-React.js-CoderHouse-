const Contact = () => {
  return (
    <section className="secContact">
        <div className="contact__1">
            <h5>Newsletters</h5>
            <p>Subscribe to our newsletter to recibe new updates</p>
        </div>
        <div className="contact__2">
            <form id="form" action="">
                <input name="name" type="text" placeholder="Name" autoComplete="off" required/>
                <input name="lastname" type="text" placeholder="Last Name" autoComplete="off" required/>
                <input name="email" type="email" placeholder="Email Address" autoComplete="off" required/>
                <div class="form__button">
                    <button type="submit">Subscribe</button>
                </div>
            </form>
        </div>
    </section>
  )
}

export default Contact