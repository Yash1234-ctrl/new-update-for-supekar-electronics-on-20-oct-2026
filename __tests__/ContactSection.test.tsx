import { render, screen } from "@testing-library/react";
import ContactSection from "../src/components/ContactSection";

describe("ContactSection", () => {
  it("renders the requested contact form fields", () => {
    render(<ContactSection />);

    expect(screen.getByLabelText("Name")).toBeRequired();
    expect(screen.getByLabelText("Phone")).toBeRequired();
    expect(screen.getByLabelText("Phone")).toHaveAttribute(
      "pattern",
      String.raw`\+?(?:[0-9]| |\(|\)|-){10,20}`,
    );
    expect(screen.getByLabelText("Email")).toBeRequired();
    expect(screen.getByLabelText("Requirement type")).toBeRequired();
    expect(screen.getByLabelText("Message")).toBeRequired();
    expect(screen.getByRole("button", { name: "Send Requirement" })).toBeInTheDocument();
  });

  it("offers all eight requirement types and contact action links", () => {
    render(<ContactSection />);

    expect(screen.getByRole("option", { name: "Select a service" })).toBeInTheDocument();
    expect(screen.getAllByRole("option")).toHaveLength(9);
    expect(screen.getByRole("link", { name: /Call/ })).toHaveAttribute("href", "tel:+918459672618");
    expect(screen.getByRole("link", { name: /WhatsApp/ })).toHaveAttribute("href", expect.stringContaining("wa.me"));
    expect(screen.getByRole("link", { name: /Email/ })).toHaveAttribute("href", "mailto:supekarelectronics@gmail.com");
  });
});
