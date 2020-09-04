import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render( <CheckoutForm /> );

    screen.getByText( /checkout form/i) // adding .not fails the test so this passes
});

test("form shows success message on submit with form details", () => {
    render( <CheckoutForm /> );

    const firstName = screen.getByLabelText( /first name:/i)
    const lastName = screen.getByLabelText( /last name:/i);
    const address = screen.getByLabelText( /address:/i);
    const city = screen.getByLabelText( /city:/i);
    const state = screen.getByLabelText( /state:/i);
    const zip = screen.getByLabelText( /zip:/i);
    const checkoutButton = screen.getByRole( 'button', {
        name: /checkout/i
    });

    fireEvent.change( firstName, { target: { value: 'Cory' } });
    fireEvent.change( lastName, { target: { value: 'Thomas' } });
    fireEvent.change( address, { target: { value: '123 St' } });
    fireEvent.change( city, { target: { value: 'Chattanooga' } });
    fireEvent.change( state, { target: { value: 'TN' } });
    fireEvent.change( zip, { target: { value: '12345' } });

    fireEvent.click( checkoutButton )

    screen.getByText( /you have ordered some plants! woo-hoo!/i )  // adding .not fails the test so this passes
});
