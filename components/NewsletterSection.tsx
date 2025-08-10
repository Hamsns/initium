export default function NewsletterSection() {
  // Brevo embed HTML for the newsletter form. Only the form markup is included;
  // styles and scripts are handled globally in layout.tsx.
  const brevoHtml = `
<div class="sib-form" style="text-align:center; background-color:#F8F9FA;">
  <div id="sib-form-container" class="sib-form-container">
    <div id="error-message" class="sib-form-message-panel"
         style="font-size:16px; text-align:left; font-family:Helvetica, sans-serif; color:#661d1d; background-color:#ffeded; border-radius:12px; border-color:#ff4949; max-width:540px;">
      <div class="sib-form-message-panel__text sib-form-message-panel__text--center">
        <svg viewBox="0 0 512 512" class="sib-icon sib-notification__icon">
          <path d="M256 40c118.621 0 216 96.075 216 216 0 119.291-96.61 216-216 216-119.244 0-216-96.562-216-216 0-119.203 96.602-216 216-216m0-32C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm-11.49 120h22.979c6.823 0 12.274 5.682 11.99 12.5l-7 168c-.268 6.428-5.556 11.5-11.99 11.5h-8.979c-6.433 0-11.722-5.073-11.99-11.5l-7-168c-.283-6.818 5.167-12.5 11.99-12.5zM256 340c-15.464 0-28 12.536-28 28s12.536 28 28 28 28-12.536 28-28-12.536-28-28-28z"/>
        </svg>
        <span class="sib-form-message-panel__inner-text">Your subscription could not be saved. Please try again.</span>
      </div>
    </div>
    <div id="success-message" class="sib-form-message-panel"
         style="font-size:16px; text-align:left; font-family:Helvetica, sans-serif; color:#085229; background-color:#e7faf0; border-radius:12px; border-color:#13ce66; max-width:540px;">
      <div class="sib-form-message-panel__text sib-form-message-panel__text--center">
        <svg viewBox="0 0 512 512" class="sib-icon sib-notification__icon">
          <path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 464c-118.664 0-216-96.055-216-216 0-118.663 96.055-216 216-216 118.664 0 216 96.055 216 216 0 118.663-96.055 216-216 216zm141.63-274.961L217.15 376.071c-4.705 4.667-12.303 4.637-16.97-.068l-85.878-86.572c-4.667-4.705-4.637-12.303.068-16.97l8.52-8.451c4.705-4.667 12.303-4.637 16.97.068l68.976 69.533 163.441-162.13c4.705-4.667 12.303-4.637 16.97.068l8.451 8.52c4.668 4.705 4.637 12.303-.068 16.97z"/>
        </svg>
        <span class="sib-form-message-panel__inner-text">Thank you for subscribing!</span>
      </div>
    </div>
    <div id="sib-container" class="sib-container--large sib-container--vertical"
         style="text-align:center; background-color:#FFFFFF; max-width:540px; border-radius:16px; border-width:1px; border-color:#E5E7EB; border-style:solid; direction:ltr">
      <form id="sib-form" method="POST"
            action="https://e88ec3f3.sibforms.com/serve/MUIFAJ7uomPeLZTf8Ud36nseqOdaPJBbRLYwvJsFjQnLxpfOfLqChzI_sn91UO5aHblvdTu2OtATRGCji6_JXHIv2V6_7X6uO9qlthd_mncW_HFRsY408csR0W1qd93tJ5MFVHav18xcZM8mVVclYX5r7hv_-mYMNzzCX2caphHs5JVuysqw8d2dLmroJszuYh3nkVUdqMToP996"
            data-type="subscription">
        <div style="padding:8px 0;">
          <div class="sib-form-block"
               style="font-size:32px; font-weight:700; font-family:Helvetica, sans-serif; color:#2C3E50; background-color:transparent; text-align:left">
            <p>Newsletter</p>
          </div>
        </div>
        <div style="padding:8px 0;">
          <div class="sib-form-block"
               style="font-size:16px; font-family:Helvetica, sans-serif; color:#3C4858; background-color:transparent; text-align:left">
            <div class="sib-text-form-block">
              <p>Subscribe to our newsletter and stay updated.</p>
            </div>
          </div>
        </div>
        <div style="padding:8px 0;">
          <div class="sib-input sib-form-block">
            <div class="form__entry entry_block">
              <div class="form__label-row">
                <label class="entry__label"
                       style="font-weight:700; font-size:16px; font-family:Helvetica, sans-serif; color:#2C3E50;"
                       for="EMAIL" data-required="*">Enter your email address to subscribe</label>
                <div class="entry__field">
                  <input class="input" type="text" id="EMAIL" name="EMAIL" autocomplete="off"
                         placeholder="EMAIL" data-required="true" required />
                </div>
              </div>
              <label class="entry__error entry__error--primary"
                     style="font-size:16px; font-family:Helvetica, sans-serif; color:#661d1d; background-color:#ffeded; border-radius:12px; border-color:#ff4949;"></label>
              <label class="entry__specification"
                     style="font-size:12px; font-family:Helvetica, sans-serif; color:#8390A4;">Provide your email address to subscribe. For e.g abc@xyz.com</label>
            </div>
          </div>
        </div>
        <div style="padding:8px 0;">
          <div class="sib-form-block" style="text-align:left">
            <button class="sib-form-block__button sib-form-block__button-with-loader"
                    style="font-size:16px; font-weight:700; font-family:Helvetica, sans-serif; color:#FFFFFF; background-color:#3498DB; border-radius:12px; border-width:0px;"
                    form="sib-form" type="submit">
              SUBSCRIBE
            </button>
          </div>
        </div>
        <input type="text" name="email_address_check" value="" class="input--hidden">
        <input type="hidden" name="locale" value="en">
      </form>
    </div>
  </div>
</div>
`.trim();

  return (
    <section id="newsletter" className="bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <h3 className="text-3xl font-semibold">Subscribe to our newsletter</h3>
        <p className="mt-2 text-slate-600">
          Monthly highlights on new blogs and research papers.
        </p>
        <div
          className="mt-6 rounded-2xl ring-1 ring-slate-200 bg-white p-2"
          dangerouslySetInnerHTML={{ __html: brevoHtml }}
        />
      </div>
    </section>
  );
}
