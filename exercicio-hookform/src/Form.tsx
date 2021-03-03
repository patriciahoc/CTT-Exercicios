import React from "react";
import { useForm } from "react-hook-form";

export default function Form() {
  const { register, errors, handleSubmit, watch } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  const casado = watch("casado");

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Nome</label>
      <input type="text" name="nome" ref={register({ required: true })} />
      {errors.nome && <p> Campo obrigatório</p>}

      <label>Cidade</label>
      <input type="text" name="cidade" ref={register} />

      <label>Email</label>
      <input type="text" name="email" ref={register({ required: true })} />
      {errors.email && <p>Campo obrigatório</p>}

      <label>Idade</label>
      <input
        type="number"
        name="idade"
        ref={register({ required: true, min: 18 })}
      />
      {errors.idade ? (
        errors.idade?.type === "required" ? (
          <p> Campo Obrigatório</p>
        ) : (
          <p> Usuário deve ser maior de 18 anos</p>
        )
      ) : (
        ""
      )}

      <label>Voce é casado(a) ?</label>
      {errors.casado?.type === "required" && <p>Campo Obrigatório</p>}
      <label>Sim</label>
      <input name="casado" type="checkbox" value="Sim" ref={register} />
      {casado && (
        <div>
          <label>Nome do conjuge</label>
          <input
            type="text"
            name="conjuge"
            ref={register({ required: true, maxLength: 80 })}
          />
          {errors.conjuge && <p> Campo obrigatório</p>}
        </div>
      )}

      <input type="submit" />
    </form>
  );
}