import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useEffect } from 'react'
import './FormCuboid.css'

export const FormCuboid = ({ onSubmit }) => {
  const schema = yup.object().shape({
    width: yup.number().min(1).required(),
    length: yup.number().min(1).required(),
    height: yup.number().min(1).required(),
  })

  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({
        width: '',
        length: '',
        height: '',
      })
    }
  }, [formState, reset])

  return (
    <form
      className='form'
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className='wrapper-input'>
        <input
          type='number'
          {...register('length')}
          placeholder='Enter the length "a"'
          autoFocus
        />
        <p>{errors?.length?.message}</p>
      </div>
      <div className='wrapper-input'>
        <input
          type='number'
          {...register('height')}
          placeholder='Enter the height "a"'
        />
        <p>{errors?.height?.message}</p>
      </div>
      <div className='wrapper-input'>
        <input
          type='number'
          {...register('width')}
          placeholder='Enter the width "b"'
        />
        <p>{errors?.width?.message}</p>
      </div>

      <div className='wrapper-input'>
        <input
          type='submit'
          value='🧮 Calculate'
        />
      </div>
    </form>
  )
}
