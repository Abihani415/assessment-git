import React from 'react'
import { useForm } from 'react-hook-form'
import { Button, Form } from 'react-bootstrap'

const InputForm = (props) => {
  const { onSubmit, fieldName } = props
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)} className="w-75 mx-auto">
        <Form.Control
          type="text"
          placeholder="Search here"
          {...register(fieldName, { required: true })}
          data-testid={`${fieldName}-test-id`}
        />
        {/* errors will return when field validation fails  */}
        {errors[fieldName] && (
          <span className="invalid-error">This field is required</span>
        )}
        <Button
          size="md"
          variant="primary"
          data-testid="submit-test-id"
          type="submit"
          className="my-4"
        >
          Submit
        </Button>
      </Form>
    </>
  )
}

export default InputForm
