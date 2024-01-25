<template>
    <div class="container">
        <article>
            <header>
                <h1>
                    <i class="fas fa-envelope"></i>
                    <div>Contact</div>
                </h1>
            </header>
            <Alert message="Le formulaire n'est pas encore opérationnel" />

            <section id="information">
                <h2>
                    Pourquoi Faire Appel à Nos Services de Ferrailleur Épaviste
                    ?
                </h2>
                <p>
                    🕖 <strong>Disponibilité Étendue :</strong>Nous sommes à
                    votre service 7 jours sur 7, de 7h à 20h. Notre grande
                    flexibilité horaire vous permet de nous contacter à votre
                    convenance, que ce soit tôt le matin ou en soirée.
                </p>
                <p>
                    🚚 Interventions Rapides et Efficaces : Notre équipe est
                    prête à intervenir rapidement pour répondre à tous vos
                    besoins en matière de récupération de ferraille et
                    d'enlèvement d'épaves. Nous comprenons l'importance de
                    traiter ces demandes dans les plus brefs délais.
                </p>
                <p>
                    🌍 Respect de l'Environnement : En tant que ferrailleur
                    épaviste professionnel, nous nous engageons à respecter
                    l'environnement dans toutes nos opérations. Le recyclage des
                    métaux et l'élimination sûre des épaves sont au cœur de nos
                    préoccupations.
                </p>
                <p>
                    🤝 Service Client Dédié : Nous accordons une importance
                    particulière à la satisfaction de nos clients. Notre équipe
                    est toujours disponible pour répondre à vos questions et
                    vous fournir des conseils personnalisés.
                </p>
                <p>
                    🔍 Transparence et Fiabilité : Avec nous, vous bénéficiez
                    d'un service transparent et fiable. Nous vous fournissons
                    toutes les informations nécessaires et nous engageons à
                    respecter nos accords.
                </p>
            </section>

            <div class="form">
                <h2>Contactez-nous</h2>

                <form
                    @submit="
                        {
                            mySubmit;
                        }
                    "
                >
                    <div class="form-group">
                        <label for="nom">Nom :</label>
                        <input type="text" id="nom" name="nom" />
                    </div>

                    <div class="form-group">
                        <label for="prenom">Prénom :</label>
                        <input type="text" id="prenom" name="prenom" />
                    </div>

                    <div class="form-group">
                        <label for="email">Email :</label>
                        <input type="email" id="email" name="email" />
                    </div>

                    <div class="form-group">
                        <label for="telephone">Téléphone :</label>
                        <input
                            type="tel"
                            id="telephone"
                            name="telephone"
                            placeholder="votre téléphone"
                        />
                    </div>

                    <div class="form-group">
                        <label for="ville">Ville :</label>
                        <input
                            type="text"
                            id="ville"
                            name="ville"
                            placeholder="votre ville"
                        />
                    </div>

                    <div class="form-group">
                        <label for="demande">Votre Demande :</label>
                        <textarea
                            id="demande"
                            name="demande"
                            rows="4"
                            placeholder="veuillez saisir une description de votre demande"
                        ></textarea>
                    </div>

                    <div class="form-group">
                        <label for="username">
                            <span>Username :</span>
                            <span>{{ usernameValue }}/20</span>
                        </label>
                        <input
                            @focus="handleBlur"
                            @blur="handleChange"
                            :class="{
                                inputSuccess:
                                    meta.touched &&
                                    meta.valid &&
                                    meta.validated &&
                                    !meta.pending,
                                inputError:
                                    meta.touched &&
                                    !meta.valid &&
                                    meta.validated &&
                                    !meta.pending,
                            }"
                            v-model="usernameValue"
                            type="text"
                            id="username"
                            name="username"
                            placeholder="votre
                    username"
                        />
                        <Transition appear>
                            <p v-if="usernameError" class="errorMessage">
                                <small
                                    ><em> {{ usernameError }} </em></small
                                >
                            </p>
                        </Transition>
                        <pre>
                        {{ meta }}
                    </pre
                        >
                    </div>

                    <div class="form-group">
                        <input type="submit" value="Envoyer" />
                    </div>
                </form>
            </div>
            <img src="@/assets/images/contact.webp" alt="" />
        </article>
    </div>
</template>

<script setup lang="ts">
import { z } from 'zod';
import { useField, useForm } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/zod';
import Alert from '../components/Alert.vue';

const myValidationSchema = z.object({
    username: z
        .string()
        .min(1, { message: 'Le champ est obligatoire' })
        .min(3, { message: 'Trop court !' })
        .max(10, { message: 'Trop long !' }),
});

const { handleSubmit } = useForm({
    validationSchema: toTypedSchema(myValidationSchema),
});

const mySubmit = handleSubmit(
    async (values, actions) => {
        console.log(values);
        console.log(actions);

        // Réinitialisation du formulaire après l'envoi
        const response = await client.post('/tests/');

        if (!response.errors) {
            actions.resetForm();
            return;
        } else if (response.errors.username) {
            actions.setFieldError('username', response.errors.username);
        }
        actions.setErrors(response.errors);
    },
    ({ values, errors, results }) => {
        console.log({ values, errors, results });
    },
);

const {
    value: usernameValue,
    errorMessage: usernameError,
    meta,
    handleChange,
    handleBlur,
    // setTouched,
} = useField('username', undefined, {
    validateOnValueUpdate: false,
});
</script>

<style scoped lang="scss">
.container {
    height: 100%;
    max-width: 100vw;
    text-align: left;
    color: var(--gray-3);

    header {
        width: 100vw;
        color: var(--gray-1);
        height: 200px;
        display: flex;
        align-items: center;
        text-align: center;
        background-color: var(--gray-3);

        h1 {
            text-shadow: 0 0 10px var(--dark-1);
            text-transform: uppercase;
            height: 100%;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-evenly;

            i {
                color: var(--warning-1);
            }

            span {
                height: 70%;
            }

            div {
                height: 30%;
            }
        }
    }
}

h2,
h3 {
    padding: 0;
    font-weight: 700;
}

article {
    section {
        padding: 3rem 1rem 0;

        p {
            padding: 1rem;
            letter-spacing: 1.6px;
            &:first-child {
                padding: 2rem 1rem 1rem;
            }
            &:last-child {
                padding: 1rem 1rem;
            }
        }
    }
    .form {
        padding: 1rem 1rem;
        display: flex;
        flex-direction: column;

        .form-group {
            margin: 0.5rem 0;
            display: flex;
            flex-direction: column;

            &:first-child {
                margin: 1rem 0;
            }

            label {
                display: flex;
                align-items: center;
                justify-content: space-between;

                span {
                    &:last-child {
                        font-size: small;
                    }
                }
            }
        }

        .inputSuccess {
            border-color: var(--success-1);
        }
        .inputError {
            border-color: var(--danger-1);
        }
        .errorMessage {
            color: var(--danger-1);
            font-style: italic;
            padding: 5px;
        }
    }
}
</style>
