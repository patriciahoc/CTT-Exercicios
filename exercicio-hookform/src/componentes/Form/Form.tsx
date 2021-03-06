import React from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

export default function Form() {
  const { register, errors, handleSubmit, watch } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    if (data) {
      return toast("Formulário enviado!");
    }
  };

  const casado = watch("estadocivil");

  return (
    <form data-testid="form" onSubmit={handleSubmit(onSubmit)}>
      <label>Nome</label>
      <input
        type="text"
        title="nome"
        name="nome"
        ref={register({ required: true })}
      />
      {errors.nome && <p role="alert"> Campo obrigatório</p>}

      <label>Cidade</label>
      <input type="text" title="cidade" name="cidade" ref={register} />

      <label>Email</label>
      <input
        type="text"
        title="email"
        name="email"
        ref={register({ required: true })}
      />
      {errors.email && <p role="alert">Campo obrigatório</p>}

      <label>Idade</label>
      <input
        type="number"
        title="idade"
        name="idade"
        ref={register({ required: true, min: 18 })}
      />
      {errors.idade ? (
        errors.idade?.type === "required" ? (
          <p role="alert"> Campo Obrigatório</p>
        ) : (
          <p role="alert"> Usuário deve ser maior de 18 anos</p>
        )
      ) : (
        ""
      )}

      <label>Voce é casado(a) ?</label>
      {errors.estadocivil && <p role="alert">Campo Obrigatório</p>}
      <label>Sim</label>
      <input
        title="casado"
        name="estadocivil"
        type="radio"
        value="sim"
        ref={register({ required: true })}
      />
      <label>Não</label>
      <input
        title="solteiro"
        name="estadocivil"
        type="radio"
        value="nao"
        ref={register({ required: true })}
      />

      {casado === "sim" && (
        <div>
          <label>Nome do conjuge</label>
          <input
            type="text"
            title="nomeConjuge"
            name="conjuge"
            ref={register({ required: true, maxLength: 80 })}
          />
          {errors.conjuge && <p role="alert"> Campo obrigatório</p>}
        </div>
      )}

      <input type="submit" />
      <Toaster />
    </form>
  );
}
