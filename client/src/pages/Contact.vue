<template>
    <article class="mt-14">
        <header
            class="bg-slate-900 h-44 flex items-center justify-center sm:h-56 md:h-72"
        >
            <h1
                class="text-yellow-200 flex flex-col gap-4 items-center sm:gap-5 md:gap-6"
            >
                <i class="fas fa-envelope text-4xl sm:text-5xl md:text-6xl"></i>
                <span
                    class="text-3xl sm:text-4xl md:text-5xl text-white text-center"
                    >Contact</span
                >
            </h1>
        </header>

        <!-- CONTAINER -->
        <div
            class="container mx-auto sm:py-5 md:py-6 lg:py-8 xl:py-9 grid grid-cols-1 gap-4"
        >
            <div class="py-4 px-4 md:px-12 md:mx-auto">
                <h2 class="text-2xl font-bold my-4">Contactez-nous</h2>
                <h3 class="text-md pt-2 py-4 font-bold">
                    <i class="fas fa-bell text-sky-500"></i> - Avant de Remplir
                    le Formulaire
                </h3>
                <p class="md:w-[80%] mx-auto">
                    <small>
                        Veuillez noter qu'une fois le formulaire rempli, un
                        email prérempli s'ouvrira dans votre logiciel de
                        messagerie par défaut. Vous aurez l'opportunité de
                        relire et de modifier cet email avant de l'envoyer.
                        Aucun envoi automatique n'est effectué.
                    </small>
                </p>
            </div>

            <!-- FORMULAIRE -->
            <section class="py-2 px-1 w-full md:px-6 mx-auto lg:px-12">
                <form
                    @submit="mySubmit"
                    class="grid grid-cols-1 gap-12 mt-4 lg:mt-0 p-4 md:grid-cols-2"
                >
                    <div
                        class="border py-8 px-4 bg-slate-50 h-fit relative rounded shadow-md flex flex-col gap-4 md:col-span-2 lg:row-span-2 lg:col-span-1"
                    >
                        <h4
                            class="absolute top-[-1.3rem] bg-slate-50 mx-8 py-2 px-4 uppercase"
                        >
                            Identitée
                        </h4>

                        <!-- NOM -->
                        <div class="form-group flex flex-col">
                            <label
                                for="lastname"
                                class="flex justify-between mb-1"
                            >
                                <span class="font-bold">Nom :</span>
                                <span>{{ counterLastname }}/25</span>
                            </label>
                            <input
                                type="text"
                                id="lastname"
                                name="lastname"
                                placeholder="Votre nom de famille"
                                v-model="lastname.value"
                                @blur="lastname.handleChange"
                                @focus="lastname.handleBlur"
                                :class="{
                                    inputSuccess:
                                        lastname.meta.touched &&
                                        lastname.meta.valid,
                                    inputError:
                                        lastname.meta.touched &&
                                        !lastname.meta.valid,
                                }"
                                autocomplete="family-name"
                                class="placeholder:text-gray-400 rounded"
                            />
                            <Transition appear>
                                <p
                                    v-if="lastname.errorMessage"
                                    class="text-red-500"
                                >
                                    <small>
                                        <em>
                                            {{ lastname.errorMessage }}
                                        </em>
                                    </small>
                                </p>
                            </Transition>
                        </div>

                        <!-- PRENOM -->
                        <div class="form-group flex flex-col">
                            <label
                                for="firstname"
                                class="flex justify-between mb-1"
                            >
                                <span class="font-bold">Prénom :</span>
                                <span>{{ counterFirstname }}/25</span>
                            </label>
                            <input
                                type="text"
                                id="firstname"
                                name="firstname"
                                placeholder="Votre prénom"
                                v-model="firstname.value"
                                @blur="firstname.handleChange"
                                @focus="firstname.handleBlur"
                                :class="{
                                    inputSuccess:
                                        firstname.meta.touched &&
                                        firstname.meta.valid,
                                    inputError:
                                        firstname.meta.touched &&
                                        !firstname.meta.valid,
                                }"
                                autocomplete="given-name"
                            />
                            <Transition appear>
                                <p
                                    v-if="firstname.errorMessage"
                                    class="text-red-500"
                                >
                                    <small
                                        ><em>
                                            {{ firstname.errorMessage }}
                                        </em></small
                                    >
                                </p>
                            </Transition>
                        </div>

                        <!-- EMAIL -->
                        <div class="form-group flex flex-col">
                            <label
                                for="email"
                                class="flex justify-between mb-1"
                            >
                                <span class="font-bold">Email :</span>
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Votre E-mail"
                                v-model="email.value"
                                @blur="email.handleChange"
                                @focus="email.handleBlur"
                                :class="{
                                    inputSuccess:
                                        email.meta.touched && email.meta.valid,
                                    inputError:
                                        email.meta.touched && !email.meta.valid,
                                }"
                                autocomplete="email"
                            />
                            <Transition appear>
                                <p
                                    v-if="email.errorMessage"
                                    class="text-red-500"
                                >
                                    <small
                                        ><em>
                                            {{ email.errorMessage }}
                                        </em></small
                                    >
                                </p>
                            </Transition>
                        </div>

                        <!-- PHONE -->
                        <div class="form-group flex flex-col">
                            <label
                                for="telephone"
                                class="flex justify-between mb-1"
                            >
                                <span class="font-bold">Téléphone :</span>
                            </label>
                            <input
                                type="tel"
                                id="telephone"
                                name="telephone"
                                placeholder="votre téléphone"
                                v-model="phone.value"
                                @blur="phone.handleChange"
                                @focus="phone.handleBlur"
                                :class="{
                                    inputSuccess:
                                        phone.meta.touched && phone.meta.valid,
                                    inputError:
                                        phone.meta.touched && !phone.meta.valid,
                                }"
                                autocomplete="tel"
                            />
                            <Transition appear>
                                <p v-if="phone.errorMessage">
                                    <small>
                                        <em class="text-red-500">
                                            {{ phone.errorMessage }}
                                        </em>
                                    </small>
                                </p>
                            </Transition>
                            <Transition appear>
                                <p
                                    v-if="phone.errorMessage"
                                    class="border p-2 mt-2 bg-gray-200 rounded"
                                >
                                    <small>
                                        <span class="text-gray-600"
                                            >Seuls les numéros de téléphone
                                            commençant par 00331, +331, 01,
                                            00334, +334, 04, 00336, +336, 06 ou
                                            00337, +337 ou 07 sont
                                            autorisés.</span
                                        ><span class="text-red-500">
                                            Enfin ne sont pas autorisés les
                                            points, espaces ou tirets.</span
                                        >
                                    </small>
                                </p>
                            </Transition>
                        </div>
                    </div>

                    <div
                        class="border py-8 px-4 bg-slate-50 h-fit relative rounded shadow-md flex flex-col gap-4"
                    >
                        <h4
                            class="absolute top-[-1.3rem] bg-slate-50 mx-8 py-2 px-4 uppercase"
                        >
                            Localisation
                        </h4>

                        <!-- DEPARTMENT -->
                        <div class="form-group flex flex-col">
                            <label
                                for="departement"
                                class="flex justify-between mb-1 font-bold"
                            >
                                Département:
                            </label>
                            <select
                                name="departement"
                                id="departement"
                                v-model="department.value"
                                @blur="department.handleChange"
                                @focus="department.handleBlur"
                                :class="{
                                    inputSuccess:
                                        department.meta.touched &&
                                        department.meta.valid,
                                    inputError:
                                        department.meta.touched &&
                                        !department.meta.valid,
                                }"
                                autocomplete="address-level1"
                            >
                                <optgroup label="Choisissez un département">
                                    <option value="ain">Ain</option>
                                    <option value="isere">Isère</option>
                                    <option value="Rhône">Rhône</option>
                                </optgroup>
                            </select>
                            <Transition appear>
                                <p
                                    v-if="department.errorMessage"
                                    class="text-red-500"
                                >
                                    <small>
                                        <em>
                                            {{ department.errorMessage }}
                                        </em>
                                    </small>
                                </p>
                            </Transition>
                        </div>

                        <!-- CITY -->
                        <div class="form-group flex flex-col">
                            <label
                                for="ville"
                                class="flex justify-between mb-1"
                            >
                                <span font-bold>Ville :</span>
                                <span>{{ counterCity }}/35</span>
                            </label>
                            <input
                                type="text"
                                id="ville"
                                name="ville"
                                placeholder="Précisez ici la ville"
                                v-model="city.value"
                                @blur="city.handleChange"
                                @focus="city.handleBlur"
                                :class="{
                                    inputSuccess:
                                        city.meta.touched && city.meta.valid,
                                    inputError:
                                        city.meta.touched && !city.meta.valid,
                                }"
                                autocomplete="address-level2"
                            />
                            <Transition appear>
                                <p
                                    v-if="city.errorMessage"
                                    class="text-red-500"
                                >
                                    <small>
                                        <em>
                                            {{ city.errorMessage }}
                                        </em>
                                    </small>
                                </p>
                            </Transition>
                        </div>
                    </div>

                    <div
                        class="border py-8 px-4 bg-slate-50 h-fit relative rounded shadow-md flex flex-col gap-4"
                    >
                        <h4
                            class="absolute top-[-1.3rem] bg-slate-50 mx-8 py-2 px-4 uppercase"
                        >
                            Raison
                        </h4>
                        <!-- SUBJECT / OBJECT / REASON -->
                        <div class="form-group flex flex-col">
                            <label
                                for="choice"
                                class="flex justify-between mb-1"
                            >
                                <span class="font-bold">Objet :</span>
                            </label>

                            <select
                                name="subject"
                                id="choice"
                                v-model="choice.value"
                                @blur="choice.handleChange"
                                @change="choice.handleBlur"
                                :class="{
                                    inputSuccess:
                                        choice.meta.touched &&
                                        choice.meta.valid,
                                    inputError:
                                        choice.meta.touched &&
                                        !choice.meta.valid,
                                }"
                            >
                                <optgroup label="Service">
                                    <option
                                        value="JV-EPAVISTE - J'ai une épave à débarrasser"
                                    >
                                        J'ai une épave à débarrasser
                                    </option>
                                    <option
                                        value="JV-EPAVISTE - J'ai de la ferraille à évacuer"
                                    >
                                        J'ai de la ferraille à évacuer
                                    </option>
                                    <option
                                        value="JV-EPAVISTE - J'ai des métaux à vendre"
                                    >
                                        J'ai des métaux à vendre
                                    </option>
                                </optgroup>
                            </select>
                            <Transition appear>
                                <p
                                    v-if="choice.errorMessage"
                                    class="text-red-500"
                                >
                                    <small>
                                        <em>
                                            {{ choice.errorMessage }}
                                        </em>
                                    </small>
                                </p>
                            </Transition>
                        </div>

                        <!-- DESCRIBE -->
                        <div class="form-group flex flex-col">
                            <label
                                for="describe"
                                class="flex justify-between mb-1 font-bold"
                            >
                                <span>Description :</span>
                                <span>{{ counterDescribe }}/250</span>
                            </label>
                            <textarea
                                id="describe"
                                name="describe"
                                rows="4"
                                placeholder="veuillez saisir une description de votre demande."
                                v-model="describe.value as string"
                                @blur="describe.handleChange"
                                @focus="describe.handleBlur"
                                :class="{
                                    inputSuccess:
                                        describe.meta.touched &&
                                        describe.meta.valid,
                                    inputError:
                                        describe.meta.touched &&
                                        !describe.meta.valid,
                                }"
                            ></textarea>
                            <Transition appear>
                                <p
                                    v-if="describe.errorMessage"
                                    class="text-red-500"
                                >
                                    <small>
                                        <em>
                                            {{ describe.errorMessage }}
                                        </em>
                                    </small>
                                </p>
                            </Transition>
                        </div>
                    </div>

                    <!-- BUTTON -->
                    <div class="form-group flex md:col-span-2 flex-col">
                        <input
                            type="submit"
                            :disabled="isSubmitting"
                            value="Envoyez"
                            class="border mx-auto rounded py-2 px-8 bg-yellow-400 shadow-md font-bold uppercase cursor-pointer disabled:cursor-not-allowed disabled:bg-gray-500"
                        />
                    </div>
                </form>
            </section>
            <!-- FIN FORMULAIRE -->

            <!-- POURQUOI ? -->
            <section
                id="information"
                class="pt-2 pb-12 px-4 w-full md:px-8 mx-auto lg:px-16"
            >
                <h2 class="text-2xl font-bold my-4 sm:my-6 md:my-8 lg:my-12">
                    <i class="fa-solid fa-question text-sky-500"></i> - Pourquoi
                    Faire Appel à mes Services ?
                </h2>
                <div class="grid grid-cols-1 sm:grid-cols-2 *:w-full gap-4">
                    <p>
                        🕖 <strong>Disponibilité Étendue :</strong>Nous sommes à
                        votre service 7 jours sur 7, de 7h à 20h. Notre grande
                        flexibilité horaire vous permet de nous contacter à
                        votre convenance, que ce soit tôt le matin ou en soirée.
                    </p>
                    <p>
                        🚚
                        <strong>Interventions Rapides et Efficaces :</strong>
                        Notre équipe est prête à intervenir rapidement pour
                        répondre à tous vos besoins en matière de récupération
                        de ferraille et d'enlèvement d'épaves. Nous comprenons
                        l'importance de traiter ces demandes dans les plus brefs
                        délais.
                    </p>
                    <p>
                        🌍 <strong>Respect de l'Environnement :</strong> En tant
                        que ferrailleur épaviste professionnel, nous nous
                        engageons à respecter l'environnement dans toutes nos
                        opérations. Le recyclage des métaux et l'élimination
                        sûre des épaves sont au cœur de nos préoccupations.
                    </p>
                    <p>
                        🤝 <strong>Service Client Dédié :</strong> Nous
                        accordons une importance particulière à la satisfaction
                        de nos clients. Notre équipe est toujours disponible
                        pour répondre à vos questions et vous fournir des
                        conseils personnalisés.
                    </p>
                    <p>
                        🔍 <strong>Transparence et Fiabilité :</strong> Avec
                        nous, vous bénéficiez d'un service transparent et
                        fiable. Nous vous fournissons toutes les informations
                        nécessaires et nous engageons à respecter nos accords.
                    </p>
                </div>
            </section>
            <!-- FIN POURQUOI ? -->
        </div>
        <!-- FIN CONTAINER -->

        <!-- IMAGE -->
        <div
            class="h-64 bg-[url('@/assets/images/contact.webp')] lg:h-80 lg:bg-center bg-no-repeat bg-right bg-cover"
        ></div>
    </article>
</template>

<script setup lang="ts">
import { computed, reactive } from 'vue';
import { z } from 'zod';
import { useField, useForm } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/zod';

const phoneRegex = /^((00|\+)?33[1467]|[01][01467])(\d{2}\d{2}\d{2}\d{2})$/;

const myValidationSchema = z.object({
    lastname: z
        .string({ required_error: 'Le nom de famille est obligatoire.' })
        .min(3, {
            message: 'Le nom de famille doit comporter au moins 3 caractères.',
        })
        .max(25, {
            message: 'Le nom de famille ne peut pas dépasser 25 caractères.',
        }),

    firstname: z
        .string({ required_error: 'Le prénom est obligatoire.' })
        .min(3, { message: 'Le prénom doit comporter au moins 3 caractères.' })
        .max(25, { message: 'Le prénom ne peut pas dépasser 25 caractères.' }),

    email: z
        .string({ required_error: "L'adresse e-mail est obligatoire." })
        .email({ message: "L'adresse e-mail n'est pas valide." }),

    phone: z
        .string({ required_error: 'Le numéro de téléphone est obligatoire.' })
        .regex(phoneRegex, 'Le format du numéro de téléphone est invalide.'),

    department: z.string({
        required_error: "La sélection d'un département est obligatoire.",
    }),

    city: z
        .string({ required_error: 'Le nom de la ville est obligatoire.' })
        .min(5, {
            message: 'Le nom de la ville doit comporter au moins 5 caractères.',
        })
        .max(35, {
            message: 'Le nom de la ville ne peut pas dépasser 35 caractères.',
        }),

    choice: z.string({
        required_error: "Le choix d'une raison de contact est obligatoire.",
    }),

    describe: z
        .string({
            required_error: 'Une description de votre demande est nécessaire.',
        })
        .min(25, {
            message: 'La description doit comporter au moins 25 caractères.',
        })
        .max(250, {
            message: 'La description ne peut pas dépasser 250 caractères.',
        }),
});

const { handleSubmit, isSubmitting } = useForm({
    validationSchema: toTypedSchema(myValidationSchema),
});

interface MAIL {
    lastname: string;
    firstname: string;
    email: string;
    phone: string;
    department: string;
    city: string;
    choice: string;
    describe: string;
}

function createMailtoLink(values: MAIL) {
    const to = 'auto69120@gmail.com'; // Adresse email du destinataire
    const subject = encodeURIComponent(values.choice);
    const body = createEmailBody(values);

    return `mailto:${to}?subject=${subject}&body=${body}`;
}

function createEmailBody(values: MAIL) {
    const message = `
Bonjour M. VIGOUREUX Jérôme,

Je me permets de vous contacter pour solliciter vos services concernant une demande spécifique.
Vous trouverez ci-dessous les détails relatifs à ma requête :

Nom: ${values.lastname.toUpperCase()}
Prénom: ${values.firstname.charAt(0).toUpperCase() + values.firstname.slice(1)}
Département: ${values.department}
Ville: ${values.city}
Email: ${values.email}
Téléphone: ${values.phone}

Description de la demande :
Bonjour, ${values.describe}

Je suis disponible pour un appel ou un rendez-vous afin de discuter plus en détail de ma demande et de la manière dont vous pourriez m'aider.
Je vous remercie par avance pour l'attention que vous porterez à ma demande et reste dans l'attente de votre retour.

Cordialement,
${
    values.firstname.charAt(0).toUpperCase() + values.firstname.slice(1)
} ${values.lastname.toUpperCase()}
`;
    return encodeURIComponent(message);
}

const mySubmit = handleSubmit(
    async (values, actions) => {
        console.log(values);
        console.log(actions);

        // Générer le lien mailto
        const mailtoLink = createMailtoLink(values);

        // Ouvrir le lien mailto
        window.location.href = mailtoLink;

        // Réinitialisation du formulaire après l'envoi
        actions.resetForm();
    },
    ({ values, errors, results }) => {
        console.log({ values, errors, results });
    },
);

/**
 * =============================================================================================
 * FIELDS
 * =============================================================================================
 */
const lastname = reactive(
    useField('lastname', undefined, { validateOnValueUpdate: true }),
);
const firstname = reactive(
    useField('firstname', undefined, { validateOnValueUpdate: true }),
);
const email = reactive(
    useField('email', undefined, { validateOnValueUpdate: true }),
);
const phone = reactive(
    useField('phone', undefined, { validateOnValueUpdate: true }),
);
const department = reactive(
    useField('department', undefined, { validateOnValueUpdate: true }),
);
const city = reactive(
    useField('city', undefined, { validateOnValueUpdate: true }),
);
const choice = reactive(
    useField('choice', undefined, { validateOnValueUpdate: true }),
);
const describe = reactive(
    useField('describe', undefined, { validateOnValueUpdate: true }),
);

/**
 * =============================================================================================
 * COUNTERS
 * =============================================================================================
 */
const counterLastname = computed(() =>
    lastname.value ? (lastname.value as string).length : 0,
);
const counterFirstname = computed(() =>
    firstname.value ? (firstname.value as string).length : 0,
);
const counterCity = computed(() => {
    return city.value ? (city.value as string).length : 0;
});
const counterDescribe = computed(() => {
    return describe.value ? (describe.value as string).length : 0;
});

/**
 * =============================================================================================
 * CHECK SUBBMITING
 * =============================================================================================
 */
console.log({
    meta: {
        lastname: { ...lastname.meta },
        firstname: { ...firstname.meta },
        email: { ...email.meta },
        phone: { ...phone.meta },
        department: { ...department.meta },
        city: { ...city.meta },
        choice: { ...choice.meta },
        describe: { ...describe.meta },
    },
});
</script>

<style scoped lang="css">
.inputSuccess {
    border: 1px solid;
    --tw-border-opacity: 1;
    border-color: rgb(74 222 128 / var(--tw-border-opacity));
}
.inputError {
    border: 1px solid;
    --tw-border-opacity: 1;
    border-color: rgb(248 113 113 / var(--tw-border-opacity));
}
</style>
