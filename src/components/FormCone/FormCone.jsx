import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useEffect } from 'react'
import './FormCone.css'

export const FormCone = ({ onSubmit }) => {
  const schema = yup.object().shape({
    radius: yup.number().min(1).required(),
    height: yup.number().min(1).required(),
    forming: yup.number().min(1).required(),
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
        radius: '',
        height: '',
        forming: '',
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
          {...register('radius')}
          placeholder='Enter the radius "r"'
          autoFocus
        />
        <p>{errors?.radius?.message}</p>
      </div>
      <div className='wrapper-input'>
        <input
          type='number'
          {...register('height')}
          placeholder='Enter the height "h"'
          autoFocus
        />
        <p>{errors?.height?.message}</p>
      </div>
      <div className='wrapper-input'>
        <input
          type='number'
          {...register('forming')}
          placeholder='Enter the forming "l"'
          autoFocus
        />
        <p>{errors?.forming?.message}</p>
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
