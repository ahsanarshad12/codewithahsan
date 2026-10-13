const SERVICES = [
  "Frontend / Next.js Development",
  "Figma to Responsive HTML/React",
  "Full-Stack Web Application",
  "Performance Optimization",
  "Other Collaboration",
];
const BUDGETS = [
  "< $500 (Small Task / Fix)",
  "$500 - $1,500 (Standard Website)",
  "$1,500 - $5,000 (Complete Platform)",
  "$5,000+ (Long-term / Full-Time Contract)",
];

function isEmail(value) {
  return (
    typeof value === "string" &&
    value.length <= 254 &&
    /^[A-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Z0-9](?:[A-Z0-9-]*[A-Z0-9])?(?:\.[A-Z0-9](?:[A-Z0-9-]*[A-Z0-9])?)+$/i.test(
      value,
    )
  );
}

function validateContact(input) {
  if (!input || typeof input !== "object" || Array.isArray(input)) {
    return { error: "Please submit a valid contact form." };
  }
  const values = {};
  const limits = {
    name: 100,
    email: 254,
    phone: 40,
    service: 100,
    budget: 100,
    message: 6000,
    website: 200,
  };
  for (const [key, max] of Object.entries(limits)) {
    const value = input[key] ?? "";
    if (typeof value !== "string" || value.length > max) {
      return {
        error: `Please check the ${key} field (maximum ${max} characters).`,
      };
    }
    values[key] = value.trim();
  }
  if (values.website) return { error: "Unable to submit this form." };
  if (!values.name || /[\r\n\x00-\x1f\x7f]/.test(values.name)) {
    return { error: "Please enter a valid name (1–100 characters)." };
  }
  if (!isEmail(values.email))
    return { error: "Please enter a valid email address." };
  if (values.phone && !/^[+()\d\s.\-]{3,40}$/.test(values.phone)) {
    return { error: "Please check your phone number." };
  }
  if (!SERVICES.includes(values.service))
    return { error: "Please select a service from the list." };
  if (!BUDGETS.includes(values.budget))
    return { error: "Please select a budget from the list." };
  if (
    !values.message ||
    /[\x00-\x08\x0b\x0c\x0e-\x1f\x7f]/.test(values.message)
  ) {
    return { error: "Please enter your project details (1–6,000 characters)." };
  }
  delete values.website;
  values.message = values.message.replace(/\r\n?/g, "\n");
  return { data: values };
}
module.exports = { validateContact, isEmail, SERVICES, BUDGETS };
