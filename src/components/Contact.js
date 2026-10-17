
import React, { useState } from "react";
import { Container, Form, Button, Alert, Spinner } from "react-bootstrap";
import emailjs from "@emailjs/browser";

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState({
        type: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (loading) return;

        setLoading(true);
        setStatus({ type: "", message: "" });

        try {
            await emailjs.send(
                "service_ccpirvp",
                "template_mvr8q3m",
                {
                    name: formData.name.trim(),
                    email: formData.email.trim(),
                    message: formData.message.trim(),
                },
                {
                    publicKey: "dVWrAT7lwB4yX8m_X",
                }
            );

            setStatus({
                type: "success",
                message: "Your message has been sent successfully! Thank you for contacting me.",
            });

            setFormData({
                name: "",
                email: "",
                message: "",
            });
        } catch (error) {
            console.error("EmailJS error:", error);

            setStatus({
                type: "danger",
                message: "Sorry, your message could not be sent. Please try again later.",
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <Container
            id="contact"
            className="d-flex flex-column justify-content-center align-items-center"
            style={{
                minHeight: "calc(100vh - 180px)",
                paddingTop: "40px",
                paddingBottom: "40px",
                maxWidth: "600px",
            }}
        >
            <h2
                style={{
                    color: "white",
                    textAlign: "center",
                    marginBottom: "30px",
                    fontWeight: "700",
                }}
            >
                Get In Touch
            </h2>

            <p
                style={{
                    color: "rgba(255, 255, 255, 0.75)",
                    textAlign: "center",
                    marginBottom: "25px",
                }}
            >
                Have an opportunity or a project in mind?
                Send me a message!
            </p>

            {status.message && (
                <Alert
                    variant={status.type}
                    className="w-100"
                    role="status"
                >
                    {status.message}
                </Alert>
            )}

            <Form onSubmit={handleSubmit} style={{ width: "100%" }}>
                {/* Name */}
                <Form.Group className="mb-3" controlId="contactName">
                    <Form.Control
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        maxLength={100}
                        autoComplete="name"
                        className="custom-dark-input"
                        disabled={loading}
                    />
                </Form.Group>

                {/* Email */}
                <Form.Group className="mb-3" controlId="contactEmail">
                    <Form.Control
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        maxLength={254}
                        autoComplete="email"
                        className="custom-dark-input"
                        disabled={loading}
                    />
                </Form.Group>

                {/* Message */}
                <Form.Group className="mb-4" controlId="contactMessage">
                    <Form.Control
                        as="textarea"
                        rows={5}
                        name="message"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        maxLength={5000}
                        className="custom-dark-input"
                        disabled={loading}
                    />
                </Form.Group>

                {/* Submit Button */}
                <div className="text-center">
                    <Button
                        type="submit"
                        disabled={loading}
                        style={{
                            backgroundColor: "#6236FF",
                            borderColor: "#6236FF",
                            color: "white",
                            borderRadius: "8px",
                            padding: "12px 30px",
                            fontWeight: "600",
                            width: "100%",
                            opacity: loading ? 0.7 : 1,
                        }}
                    >
                        {loading ? (
                            <>
                                <Spinner
                                    animation="border"
                                    size="sm"
                                    className="me-2"
                                />
                                Sending...
                            </>
                        ) : (
                            "Send Message"
                        )}
                    </Button>
                </div>
            </Form>

            {/* Input Styling */}
            <style>{`
                .custom-dark-input {
                    background-color: #1a1a24 !important;
                    border: 1px solid #2d2d3a !important;
                    color: white !important;
                    border-radius: 8px !important;
                    padding: 12px !important;
                }

                .custom-dark-input::placeholder {
                    color: rgba(255, 255, 255, 0.8) !important;
                    opacity: 1 !important;
                }

                .custom-dark-input:focus {
                    background-color: #1a1a24 !important;
                    color: white !important;
                    border-color: #6236FF !important;
                    box-shadow: 0 0 0 0.2rem rgba(98, 54, 255, 0.25) !important;
                }

                .custom-dark-input:disabled {
                    opacity: 0.65;
                    cursor: not-allowed;
                }
            `}</style>
        </Container>
    );
}

export default Contact;
