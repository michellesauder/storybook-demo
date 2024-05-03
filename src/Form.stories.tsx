import type { Meta, StoryObj } from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import Form from "./Form";

const meta: Meta<typeof Form> = {
  component: Form,
  title: "Form",
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  play: async ({ canvasElement }) => {
    // Get access to the canvas within the story
    const canvas = within(canvasElement);

    // Find the submit button, email label, and question label
    const submitBtn = canvas.getByText("Post question");
    const email = canvas.getByText("Email");
    const question = canvas.getByText("Question");

    // Ensure all required elements are present on the canvas
    await expect(submitBtn).toBeInTheDocument();
    await expect(email).toBeInTheDocument();
    await expect(question).toBeInTheDocument();

    // Add comments or documentation for further understanding
    // Look at the react testing library for more info
    // Query substrings (/post/i) instead of text
  },
};

export const EmptySubmit: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Find the submit button
    const submitBtn = canvas.getByRole("button", {
      name: /post/i,
    });

    // Click the submit button without entering any data
    await userEvent.click(submitBtn);

    // Ensure error messages for empty fields are displayed
    await expect(canvas.getByText(/enter your email/i)).toBeInTheDocument();
    await expect(canvas.getByText(/enter a question/i)).toBeInTheDocument();
  },
};

export const InvalidEmail: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Find the submit button and email input field
    const submitBtn = canvas.getByRole("button", {
      name: /post/i,
    });
    const email = canvas.getByLabelText(/email/i);

    // Type an invalid email and click the submit button
    await userEvent.type(email, "i-am-not-an-email");
    await userEvent.click(submitBtn);

    // Ensure error message for invalid email is displayed
    await expect(canvas.getByText(/valid email/i)).toBeInTheDocument();
    await expect(canvas.getByText(/enter a question/i)).toBeInTheDocument();
  },
};

export const ValidEmail: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Find the submit button, email input field, and question textarea
    const submitBtn = canvas.getByRole("button", {
      name: /post/i,
    });
    const email = canvas.getByRole("textbox", {
      name: /email/i,
    });
    const question = canvas.getByRole("textbox", {
      name: /question/i,
    });

    // Type a valid email and a question, then click the submit button
    await userEvent.type(email, "mgsauder@hotmail.com");
    await userEvent.type(question, "yo?");
    await userEvent.click(submitBtn);

    // Ensure success message is displayed after submitting valid data
    await expect(canvas.getByText(/AWESOME THANKS!/i)).toBeInTheDocument();
  },
};
