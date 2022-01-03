import React from "react";
import { screen, render, fireEvent, act, waitForElementToBeRemoved } from '../test-utils'
import "@testing-library/jest-dom";
import GitUser from "../component/gitUser";


describe("Take GitUser Component snapshot" , () => {
  it("User Detail", async () => {
    render(<GitUser />)
    const inputField = screen.getByTestId('username-test-id');
    const submitBtn = screen.getByTestId('submit-test-id');

    fireEvent.change(inputField, {target: {value: 'ankitbihani415'}});
    await act(async () => {
        fireEvent.click(submitBtn);
    });
    await waitForElementToBeRemoved(() => screen.queryAllByTestId("loading-test-id"))
    expect(screen.getByTestId("user-profile-test-id")).toMatchSnapshot();
  })
})