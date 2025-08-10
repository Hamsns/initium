// components/NewsletterCompact.tsx
export default function NewsletterCompact() {
  const brevoHtmlCompact = `
<div class="sib-form" style="text-align:center; background-color:#FFFFFF;">
  <div id="sib-form-container" class="sib-form-container">
    <div id="sib-container" class="sib-container--large sib-container--vertical"
         style="text-align:center; background-color:#FFFFFF; max-width:560px; border-radius:12px; border:1px solid #E5E7EB; direction:ltr">
      <form id="sib-form" method="POST"
            action="https://e88ec3f3.sibforms.com/serve/MUIFAJ7uomPeLZTf8Ud36nseqOdaPJBbRLYwvJsFjQnLxpfOfLqChzI_sn91UO5aHblvdTu2OtATRGCji6_JXHIv2V6_7X6uO9qlthd_mncW_HFRsY408csR0W1qd93tJ5MFVHav18xcZM8mVVclYX5r7hv_-mYMNzzCX2caphHs5JVuysqw8d2dLmroJszuYh3nkVUdqMToP996"
            data-type="subscription" style="padding:16px 18px">
        <div style="text-align:left; margin-bottom:10px;">
          <p style="margin:0; font-family:Helvetica,Arial,sans-serif; font-weight:700; font-size:18px; color:#2C3E50;">Subscribe to our newsletter</p>
          <p style="margin:6px 0 0; font-family:Helvetica,Arial,sans-serif; font-size:13px; color:#64748B;">Monthly highlights on new blogs and research papers.</p>
        </div>
        <div class="sib-input sib-form-block" style="margin-top:8px;">
          <div class="form__entry entry_block">
            <div class="form__label-row" style="display:flex; gap:10px; align-items:center;">
              <div class="entry__field" style="flex:1;">
                <input class="input" type="text" id="EMAIL" name="EMAIL" autocomplete="off" placeholder="Your email" data-required="true" required
                       style="width:100%; height:40px; border-radius:10px; border:1px solid #E5E7EB; padding:0 12px;" />
              </div>
              <button class="sib-form-block__button sib-form-block__button-with-loader"
                style="height:40px; padding:0 14px; border:0; border-radius:10px; background-color:#3498DB; color:#fff; font-weight:700; font-family:Helvetica,Arial,sans-serif;"
                type="submit">Subscribe</button>
            </div>
          </div>
        </div>
        <input type="text" name="email_address_check" value="" class="input--hidden"><input type="hidden" name="locale" value="en">
      </form>
    </div>
  </div>
</div>
`.trim();

  return <div dangerouslySetInnerHTML={{ __html: brevoHtmlCompact }} />;
}
