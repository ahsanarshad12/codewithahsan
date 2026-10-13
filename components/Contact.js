import CopyEmailButton from "./CopyEmailButton";
import MessageCounter from "./MessageCounter";

import ThemedSelect from "./ThemedSelect";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section
      className="mobile-layout:py-14 mobile-layout:sm:py-24 mobile-layout:px-3 mobile-layout:sm:px-6 mobile-layout:lg:px-8 mobile-layout:max-w-7xl mobile-layout:mx-auto desktop-layout:py-24 desktop-layout:px-4 desktop-layout:sm:px-6 desktop-layout:lg:px-8 desktop-layout:max-w-7xl desktop-layout:mx-auto"
      id="contact"
    >
      {"\n"}
      <div className="reveal-on-scroll mobile-layout:text-center mobile-layout:mb-10 mobile-layout:sm:mb-16 desktop-layout:text-center desktop-layout:mb-16">
        {"\n"}
        <span className="tilt-right-sm mobile-layout:bg-brand-purple mobile-layout:text-white mobile-layout:font-marker mobile-layout:px-3 mobile-layout:py-1 mobile-layout:sm:px-4 mobile-layout:sm:py-1.5 mobile-layout:rounded-lg mobile-layout:border-2 mobile-layout:border-black mobile-layout:shadow-cutout mobile-layout:text-[11px] mobile-layout:sm:text-xs mobile-layout:uppercase mobile-layout:tracking-widest mobile-layout:inline-block mobile-layout:mb-2 mobile-layout:sm:mb-3 desktop-layout:bg-brand-purple desktop-layout:text-white desktop-layout:font-marker desktop-layout:px-4 desktop-layout:py-1.5 desktop-layout:rounded-lg desktop-layout:border-2 desktop-layout:border-black desktop-layout:shadow-cutout desktop-layout:text-xs desktop-layout:uppercase desktop-layout:tracking-widest desktop-layout:inline-block desktop-layout:mb-3">
          {"\n  GET IN TOUCH\n"}
        </span>
        {"\n"}
        <h2 className="mobile-layout:font-marker mobile-layout:text-3xl mobile-layout:sm:text-6xl mobile-layout:text-slate-900 mobile-layout:tracking-tight desktop-layout:font-marker desktop-layout:text-4xl desktop-layout:sm:text-6xl desktop-layout:text-slate-900 desktop-layout:tracking-tight">
          {"LET'S WORK TOGETHER"}
        </h2>
        {"\n"}
        <p className="mobile-layout:font-doodle mobile-layout:text-lg mobile-layout:sm:text-2xl mobile-layout:text-slate-600 mobile-layout:mt-1 mobile-layout:sm:mt-2 mobile-layout:font-bold desktop-layout:font-doodle desktop-layout:text-2xl desktop-layout:text-slate-600 desktop-layout:mt-2 desktop-layout:font-bold">
          {"Have a project, role, or idea? Drop a note below!"}
        </p>
        {"\n"}
      </div>
      {"\n"}
      <div className="mobile-layout:grid mobile-layout:grid-cols-1 mobile-layout:lg:grid-cols-12 mobile-layout:gap-6 mobile-layout:sm:gap-8 mobile-layout:items-start desktop-layout:grid desktop-layout:grid-cols-1 desktop-layout:lg:grid-cols-12 desktop-layout:gap-8 desktop-layout:items-start">
        {"\n"}
        <div className="tilt-left-sm reveal-on-scroll mobile-layout:lg:col-span-7 mobile-layout:bg-white mobile-layout:rounded-2xl mobile-layout:sm:rounded-3xl mobile-layout:border-2 mobile-layout:sm:border-3 mobile-layout:border-black mobile-layout:p-4 mobile-layout:sm:p-10 mobile-layout:shadow-card-lift mobile-layout:relative mobile-layout:transition-transform mobile-layout:duration-300 mobile-layout:hover:rotate-0 desktop-layout:lg:col-span-7 desktop-layout:bg-white desktop-layout:rounded-3xl desktop-layout:border-3 desktop-layout:border-black desktop-layout:p-6 desktop-layout:sm:p-10 desktop-layout:shadow-card-lift desktop-layout:relative desktop-layout:transition-transform desktop-layout:duration-300 desktop-layout:hover:rotate-0">
          {"\n"}
          <div className="washi-tape tilt-left-sm mobile-layout:absolute mobile-layout:-top-3 mobile-layout:left-6 mobile-layout:sm:left-12 mobile-layout:w-24 mobile-layout:sm:w-32 mobile-layout:h-6 mobile-layout:sm:h-7 desktop-layout:absolute desktop-layout:-top-3.5 desktop-layout:left-12 desktop-layout:w-32 desktop-layout:h-7"></div>
          {"\n"}
          <ContactForm
            action="#"
            className="mobile-layout:space-y-3.5 mobile-layout:sm:space-y-4 desktop-layout:space-y-4"
            method="POST"
          >
            {"\n"}
            <div className="mobile-layout:grid mobile-layout:grid-cols-1 mobile-layout:sm:grid-cols-2 mobile-layout:gap-3 mobile-layout:sm:gap-4 desktop-layout:grid desktop-layout:grid-cols-1 desktop-layout:sm:grid-cols-2 desktop-layout:gap-4">
              {"\n"}
              <div>
                {"\n"}
                <label
                  className="mobile-layout:block mobile-layout:font-bold mobile-layout:text-[11px] mobile-layout:sm:text-xs mobile-layout:uppercase mobile-layout:tracking-wider mobile-layout:text-slate-700 mobile-layout:mb-1 desktop-layout:block desktop-layout:font-bold desktop-layout:text-xs desktop-layout:uppercase desktop-layout:tracking-wider desktop-layout:text-slate-700 desktop-layout:mb-1"
                  htmlFor="contact-name"
                >
                  {"Your Name *"}
                </label>
                {"\n"}
                <input
                  className="mobile-layout:w-full mobile-layout:rounded-xl mobile-layout:border-2 mobile-layout:border-black mobile-layout:p-2.5 mobile-layout:sm:p-3 mobile-layout:text-xs mobile-layout:sm:text-sm mobile-layout:focus:ring-brand-purple mobile-layout:focus:border-brand-purple mobile-layout:bg-[#fbf9f4] mobile-layout:transition desktop-layout:w-full desktop-layout:rounded-xl desktop-layout:border-2 desktop-layout:border-black desktop-layout:p-3 desktop-layout:text-sm desktop-layout:focus:ring-brand-purple desktop-layout:focus:border-brand-purple desktop-layout:bg-[#fbf9f4] desktop-layout:transition"
                  placeholder="e.g. Alex Miller"
                  required
                  type="text"
                  id="contact-name"
                  name="name"
                  autoComplete="name"
                  maxLength={100}
                />
                {"\n"}
              </div>
              {"\n"}
              <div>
                {"\n"}
                <label
                  className="mobile-layout:block mobile-layout:font-bold mobile-layout:text-[11px] mobile-layout:sm:text-xs mobile-layout:uppercase mobile-layout:tracking-wider mobile-layout:text-slate-700 mobile-layout:mb-1 desktop-layout:block desktop-layout:font-bold desktop-layout:text-xs desktop-layout:uppercase desktop-layout:tracking-wider desktop-layout:text-slate-700 desktop-layout:mb-1"
                  htmlFor="contact-email"
                >
                  {"Email Address *"}
                </label>
                {"\n"}
                <input
                  className="mobile-layout:w-full mobile-layout:rounded-xl mobile-layout:border-2 mobile-layout:border-black mobile-layout:p-2.5 mobile-layout:sm:p-3 mobile-layout:text-xs mobile-layout:sm:text-sm mobile-layout:focus:ring-brand-purple mobile-layout:focus:border-brand-purple mobile-layout:bg-[#fbf9f4] mobile-layout:transition desktop-layout:w-full desktop-layout:rounded-xl desktop-layout:border-2 desktop-layout:border-black desktop-layout:p-3 desktop-layout:text-sm desktop-layout:focus:ring-brand-purple desktop-layout:focus:border-brand-purple desktop-layout:bg-[#fbf9f4] desktop-layout:transition"
                  placeholder="alex@company.com"
                  required
                  type="email"
                  id="contact-email"
                  name="email"
                  autoComplete="email"
                  maxLength={254}
                />
                {"\n"}
              </div>
              {"\n"}
            </div>
            {"\n"}
            <div className="mobile-layout:grid mobile-layout:grid-cols-1 mobile-layout:sm:grid-cols-2 mobile-layout:gap-3 mobile-layout:sm:gap-4 desktop-layout:grid desktop-layout:grid-cols-1 desktop-layout:sm:grid-cols-2 desktop-layout:gap-4">
              {"\n"}
              <div>
                {"\n"}
                <label
                  className="mobile-layout:block mobile-layout:font-bold mobile-layout:text-[11px] mobile-layout:sm:text-xs mobile-layout:uppercase mobile-layout:tracking-wider mobile-layout:text-slate-700 mobile-layout:mb-1 desktop-layout:block desktop-layout:font-bold desktop-layout:text-xs desktop-layout:uppercase desktop-layout:tracking-wider desktop-layout:text-slate-700 desktop-layout:mb-1"
                  htmlFor="contact-phone"
                >
                  {"Phone / WhatsApp"}
                </label>
                {"\n"}
                <input
                  className="mobile-layout:w-full mobile-layout:rounded-xl mobile-layout:border-2 mobile-layout:border-black mobile-layout:p-2.5 mobile-layout:sm:p-3 mobile-layout:text-xs mobile-layout:sm:text-sm mobile-layout:focus:ring-brand-purple mobile-layout:focus:border-brand-purple mobile-layout:bg-[#fbf9f4] mobile-layout:transition desktop-layout:w-full desktop-layout:rounded-xl desktop-layout:border-2 desktop-layout:border-black desktop-layout:p-3 desktop-layout:text-sm desktop-layout:focus:ring-brand-purple desktop-layout:focus:border-brand-purple desktop-layout:bg-[#fbf9f4] desktop-layout:transition"
                  placeholder="+1 (555) 000-0000"
                  type="tel"
                  id="contact-phone"
                  name="phone"
                  autoComplete="tel"
                  maxLength={40}
                />
                {"\n"}
              </div>
              {"\n"}
              <div>
                {"\n"}
                <label
                  className="mobile-layout:block mobile-layout:font-bold mobile-layout:text-[11px] mobile-layout:sm:text-xs mobile-layout:uppercase mobile-layout:tracking-wider mobile-layout:text-slate-700 mobile-layout:mb-1 desktop-layout:block desktop-layout:font-bold desktop-layout:text-xs desktop-layout:uppercase desktop-layout:tracking-wider desktop-layout:text-slate-700 desktop-layout:mb-1"
                  htmlFor="contact-service"
                  id="contact-service-label"
                >
                  {"Service Needed"}
                </label>
                {"\n"}
                <ThemedSelect
                  id="contact-service"
                  name="service"
                  kind="service"
                  options={[
                    "Frontend / Next.js Development",
                    "Figma to Responsive HTML/React",
                    "Full-Stack Web Application",
                    "Performance Optimization",
                    "Other Collaboration",
                  ]}
                />
                {"\n"}
              </div>
              {"\n"}
            </div>
            {"\n"}
            <div>
              {"\n"}
              <label
                className="mobile-layout:block mobile-layout:font-bold mobile-layout:text-[11px] mobile-layout:sm:text-xs mobile-layout:uppercase mobile-layout:tracking-wider mobile-layout:text-slate-700 mobile-layout:mb-1 desktop-layout:block desktop-layout:font-bold desktop-layout:text-xs desktop-layout:uppercase desktop-layout:tracking-wider desktop-layout:text-slate-700 desktop-layout:mb-1"
                htmlFor="contact-budget"
                id="contact-budget-label"
              >
                {"Budget Range (USD)"}
              </label>
              {"\n"}
              <ThemedSelect
                id="contact-budget"
                name="budget"
                kind="budget"
                options={[
                  "< $500 (Small Task / Fix)",
                  "$500 - $1,500 (Standard Website)",
                  "$1,500 - $5,000 (Complete Platform)",
                  "$5,000+ (Long-term / Full-Time Contract)",
                ]}
              />
              {"\n"}
            </div>
            {"\n"}
            <div>
              {"\n"}
              <label
                className="mobile-layout:block mobile-layout:font-bold mobile-layout:text-[11px] mobile-layout:sm:text-xs mobile-layout:uppercase mobile-layout:tracking-wider mobile-layout:text-slate-700 mobile-layout:mb-1 desktop-layout:block desktop-layout:font-bold desktop-layout:text-xs desktop-layout:uppercase desktop-layout:tracking-wider desktop-layout:text-slate-700 desktop-layout:mb-1"
                htmlFor="contact-message"
              >
                {"Project Details *"}
              </label>
              {"\n"}
              <textarea
                className="mobile-layout:w-full mobile-layout:rounded-xl mobile-layout:border-2 mobile-layout:border-black mobile-layout:p-2.5 mobile-layout:sm:p-3 mobile-layout:text-xs mobile-layout:sm:text-sm mobile-layout:focus:ring-brand-purple mobile-layout:focus:border-brand-purple mobile-layout:bg-[#fbf9f4] mobile-layout:transition desktop-layout:w-full desktop-layout:rounded-xl desktop-layout:border-2 desktop-layout:border-black desktop-layout:p-3 desktop-layout:text-sm desktop-layout:focus:ring-brand-purple desktop-layout:focus:border-brand-purple desktop-layout:bg-[#fbf9f4] desktop-layout:transition"
                placeholder="Tell me about the goals, timeline, and tech specs of your project..."
                required
                rows="3"
                id="contact-message"
                name="message"
                maxLength={6000}
              ></textarea>
              {"\n"}
              <MessageCounter max={6000} />
              {"\n"}
            </div>
            {"\n"}
            <button
              className="btn-spring mobile-layout:w-full mobile-layout:bg-[#fbe84c] mobile-layout:text-black mobile-layout:font-black mobile-layout:text-base mobile-layout:sm:text-lg mobile-layout:py-3 mobile-layout:sm:py-4 mobile-layout:rounded-xl mobile-layout:border-2 mobile-layout:border-black mobile-layout:shadow-cutout mobile-layout:hover:shadow-cutout-lg mobile-layout:transition-all mobile-layout:flex mobile-layout:items-center mobile-layout:justify-center mobile-layout:gap-2 desktop-layout:w-full desktop-layout:bg-[#fbe84c] desktop-layout:text-black desktop-layout:font-black desktop-layout:text-lg desktop-layout:py-4 desktop-layout:rounded-xl desktop-layout:border-2 desktop-layout:border-black desktop-layout:shadow-cutout desktop-layout:hover:shadow-cutout-lg desktop-layout:transition-all desktop-layout:flex desktop-layout:items-center desktop-layout:justify-center desktop-layout:gap-2"
              type="submit"
            >
              {"\n"}
              <span>{"Send Message"}</span>
              {"\n"}
              <span className="mobile-layout:text-lg mobile-layout:sm:text-xl desktop-layout:text-xl">
                {"🚀"}
              </span>
              {"\n"}
            </button>
            {"\n"}
          </ContactForm>
          {"\n"}
        </div>
        {"\n"}
        <div className="mobile-layout:lg:col-span-5 mobile-layout:space-y-4 mobile-layout:sm:space-y-6 desktop-layout:lg:col-span-5 desktop-layout:space-y-6">
          {"\n"}
          <div className="tilt-right-sm reveal-on-scroll mobile-layout:bg-[#f0ece1] mobile-layout:rounded-2xl mobile-layout:sm:rounded-3xl mobile-layout:border-2 mobile-layout:sm:border-3 mobile-layout:border-black mobile-layout:p-4 mobile-layout:sm:p-8 mobile-layout:shadow-card-lift mobile-layout:relative mobile-layout:transition-transform mobile-layout:duration-300 mobile-layout:hover:rotate-0 desktop-layout:bg-[#f0ece1] desktop-layout:rounded-3xl desktop-layout:border-3 desktop-layout:border-black desktop-layout:p-6 desktop-layout:sm:p-8 desktop-layout:shadow-card-lift desktop-layout:relative desktop-layout:transition-transform desktop-layout:duration-300 desktop-layout:hover:rotate-0">
            {"\n"}
            <div className="washi-tape tilt-right-md mobile-layout:absolute mobile-layout:-top-3 mobile-layout:right-6 mobile-layout:sm:right-8 mobile-layout:w-24 mobile-layout:sm:w-28 mobile-layout:h-6 mobile-layout:sm:h-7 desktop-layout:absolute desktop-layout:-top-3.5 desktop-layout:right-8 desktop-layout:w-28 desktop-layout:h-7"></div>
            {"\n"}
            <h3 className="mobile-layout:font-marker mobile-layout:text-lg mobile-layout:sm:text-2xl mobile-layout:text-slate-900 mobile-layout:mb-3 mobile-layout:sm:mb-4 desktop-layout:font-marker desktop-layout:text-2xl desktop-layout:text-slate-900 desktop-layout:mb-4">
              {"Direct Touchpoints"}
            </h3>
            {"\n"}
            <div className="mobile-layout:space-y-3 mobile-layout:sm:space-y-4 mobile-layout:text-xs mobile-layout:sm:text-sm mobile-layout:font-medium desktop-layout:space-y-4 desktop-layout:text-sm desktop-layout:font-medium">
              {"\n"}
              <div className="mobile-layout:p-2.5 mobile-layout:sm:p-3 mobile-layout:bg-white mobile-layout:rounded-xl mobile-layout:border-2 mobile-layout:border-black mobile-layout:flex mobile-layout:items-center mobile-layout:gap-3 mobile-layout:hover:scale-[1.02] mobile-layout:transition-transform mobile-layout:cursor-pointer desktop-layout:p-3 desktop-layout:bg-white desktop-layout:rounded-xl desktop-layout:border-2 desktop-layout:border-black desktop-layout:flex desktop-layout:items-center desktop-layout:gap-3 desktop-layout:hover:scale-[1.02] desktop-layout:transition-transform desktop-layout:cursor-pointer">
                {"\n"}
                <span className="mobile-layout:text-xl mobile-layout:sm:text-2xl desktop-layout:text-2xl">
                  {"📧"}
                </span>
                {"\n"}
                <div className="mobile-layout:truncate">
                  {"\n"}
                  <span className="mobile-layout:text-[10px] mobile-layout:sm:text-xs mobile-layout:text-slate-500 mobile-layout:font-bold mobile-layout:block desktop-layout:text-xs desktop-layout:text-slate-500 desktop-layout:font-bold desktop-layout:block">
                    {"DIRECT EMAIL"}
                  </span>
                  {"\n"}
                  <a
                    className="mobile-layout:text-slate-900 mobile-layout:font-bold mobile-layout:hover:text-brand-purple mobile-layout:truncate desktop-layout:text-slate-900 desktop-layout:font-bold desktop-layout:hover:text-brand-purple"
                    href="mailto:ahsanarshad291@gmail.com"
                  >
                    {"\n  ahsanarshad291@gmail.com\n"}
                  </a>
                  {"\n"}
                  <CopyEmailButton email="ahsanarshad291@gmail.com" />
                  {"\n"}
                </div>
                {"\n"}
              </div>
              {"\n"}
              <div className="mobile-layout:p-2.5 mobile-layout:sm:p-3 mobile-layout:bg-white mobile-layout:rounded-xl mobile-layout:border-2 mobile-layout:border-black mobile-layout:flex mobile-layout:items-center mobile-layout:gap-3 mobile-layout:hover:scale-[1.02] mobile-layout:transition-transform mobile-layout:cursor-pointer desktop-layout:p-3 desktop-layout:bg-white desktop-layout:rounded-xl desktop-layout:border-2 desktop-layout:border-black desktop-layout:flex desktop-layout:items-center desktop-layout:gap-3 desktop-layout:hover:scale-[1.02] desktop-layout:transition-transform desktop-layout:cursor-pointer">
                {"\n"}
                <span className="mobile-layout:text-xl mobile-layout:sm:text-2xl desktop-layout:text-2xl">
                  {"📍"}
                </span>
                {"\n"}
                <div>
                  {"\n"}
                  <span className="mobile-layout:text-[10px] mobile-layout:sm:text-xs mobile-layout:text-slate-500 mobile-layout:font-bold mobile-layout:block desktop-layout:text-xs desktop-layout:text-slate-500 desktop-layout:font-bold desktop-layout:block">
                    {"LOCATION"}
                  </span>
                  {"\n"}
                  <span className="text-slate-900 font-bold">
                    <span className="mobile-copy">
                      {"\n  Lahore, Punjab, PK (Remote)\n"}
                    </span>
                    <span className="desktop-copy">
                      {
                        "\n                    Lahore, Punjab, Pakistan (Remote Worldwide)\n                  "
                      }
                    </span>
                  </span>
                  {"\n"}
                </div>
                {"\n"}
              </div>
              {"\n"}
              <div className="mobile-layout:p-2.5 mobile-layout:sm:p-3 mobile-layout:bg-white mobile-layout:rounded-xl mobile-layout:border-2 mobile-layout:border-black mobile-layout:flex mobile-layout:items-center mobile-layout:gap-3 mobile-layout:hover:scale-[1.02] mobile-layout:transition-transform mobile-layout:cursor-pointer desktop-layout:p-3 desktop-layout:bg-white desktop-layout:rounded-xl desktop-layout:border-2 desktop-layout:border-black desktop-layout:flex desktop-layout:items-center desktop-layout:gap-3 desktop-layout:hover:scale-[1.02] desktop-layout:transition-transform desktop-layout:cursor-pointer">
                {"\n"}
                <span className="mobile-layout:text-xl mobile-layout:sm:text-2xl desktop-layout:text-2xl">
                  {"⏱️"}
                </span>
                {"\n"}
                <div>
                  {"\n"}
                  <span className="mobile-layout:text-[10px] mobile-layout:sm:text-xs mobile-layout:text-slate-500 mobile-layout:font-bold mobile-layout:block desktop-layout:text-xs desktop-layout:text-slate-500 desktop-layout:font-bold desktop-layout:block">
                    {"RESPONSE TIME"}
                  </span>
                  {"\n"}
                  <span className="text-emerald-700 font-black">
                    {"\n  Under 24 Hours Guaranteed\n"}
                  </span>
                  {"\n"}
                </div>
                {"\n"}
              </div>
              {"\n"}
            </div>
            {"\n"}
          </div>
          {"\n"}
          <div className="tilt-left-sm reveal-on-scroll mobile-layout:bg-brand-purple mobile-layout:text-white mobile-layout:rounded-2xl mobile-layout:sm:rounded-3xl mobile-layout:border-2 mobile-layout:sm:border-3 mobile-layout:border-black mobile-layout:p-4 mobile-layout:sm:p-8 mobile-layout:shadow-card-lift mobile-layout:relative mobile-layout:transition-transform mobile-layout:duration-300 mobile-layout:hover:rotate-0 desktop-layout:bg-brand-purple desktop-layout:text-white desktop-layout:rounded-3xl desktop-layout:border-3 desktop-layout:border-black desktop-layout:p-6 desktop-layout:sm:p-8 desktop-layout:shadow-card-lift desktop-layout:relative desktop-layout:transition-transform desktop-layout:duration-300 desktop-layout:hover:rotate-0">
            {"\n"}
            <div className="animate-sparkle mobile-layout:absolute mobile-layout:-top-3.5 mobile-layout:right-4 mobile-layout:sm:right-6 mobile-layout:text-2xl mobile-layout:sm:text-3xl mobile-layout:select-none desktop-layout:absolute desktop-layout:-top-4 desktop-layout:right-6 desktop-layout:text-3xl desktop-layout:select-none">
              {"\n  📎\n"}
            </div>
            {"\n"}
            <span className="mobile-layout:font-marker mobile-layout:text-yellow-300 mobile-layout:text-[10px] mobile-layout:sm:text-xs mobile-layout:tracking-widest mobile-layout:block mobile-layout:uppercase mobile-layout:mb-1 mobile-layout:sm:mb-2 desktop-layout:font-marker desktop-layout:text-yellow-300 desktop-layout:text-xs desktop-layout:tracking-widest desktop-layout:block desktop-layout:uppercase desktop-layout:mb-2">
              {"DEV MINDSET"}
            </span>
            {"\n"}
            <p className="mobile-layout:font-doodle mobile-layout:text-xl mobile-layout:sm:text-2xl mobile-layout:font-bold mobile-layout:leading-snug desktop-layout:font-doodle desktop-layout:text-2xl desktop-layout:font-bold desktop-layout:leading-snug">
              {
                '\n  "Clean code always looks like it was written by someone who cares deeply about their craft."\n'
              }
            </p>
            {"\n"}
            <div className="mobile-layout:mt-3 mobile-layout:sm:mt-4 mobile-layout:pt-2.5 mobile-layout:sm:pt-3 mobile-layout:border-t mobile-layout:border-purple-400/50 mobile-layout:flex mobile-layout:justify-between mobile-layout:items-center mobile-layout:text-[10px] mobile-layout:sm:text-xs mobile-layout:font-mono mobile-layout:text-purple-200 desktop-layout:mt-4 desktop-layout:pt-3 desktop-layout:border-t desktop-layout:border-purple-400/50 desktop-layout:flex desktop-layout:justify-between desktop-layout:items-center desktop-layout:text-xs desktop-layout:font-mono desktop-layout:text-purple-200">
              {"\n"}
              <span>{"— Robert C. Martin"}</span>
              {"\n"}
              <span>{"Code Craftsmanship"}</span>
              {"\n"}
            </div>
            {"\n"}
          </div>
          {"\n"}
        </div>
        {"\n"}
      </div>
      {"\n"}
    </section>
  );
}
