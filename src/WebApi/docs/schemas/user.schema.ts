export const UserSchemas = {
  UserRequest: {
    type: "object",
    required: [

      "roleId",

      "fullName",

      "image",

      "email",

      "password",

      "phoneNumber",

      "membershipNumber",

      "active",

      "createdAt",

      "updatedAt"

    ],
    properties: {

      roleId: { type: "string" },

      fullName: { type: "string" },

      image: { type: "string" },

      email: { type: "string" },

      password: { type: "string" },

      phoneNumber: { type: "string" },

      membershipNumber: { type: "string" },

      active: { type: "string" },

      createdAt: { type: "string" },

      updatedAt: { type: "string" },

    }
  },

  User: {
    type: "object",
    properties: {
      id: { type: "string" },

      roleId: { type: "string" },

      fullName: { type: "string" },

      image: { type: "string" },

      email: { type: "string" },

      phoneNumber: { type: "string" },

      membershipNumber: { type: "string" },

      active: { type: "string" },

      createdAt: { type: "string" },

      updatedAt: { type: "string" },

    }
  },

  UserUpdateRequest: {
    type: "object",

    required: [
      "fullName",
      "phoneNumber"
    ],

    properties: {
      fullName: {
        type: "string",
        example: "Juan Pérez"
      },

      phoneNumber: {
        type: "string",
        example: "+50588888888"
      },

      image: {
        type: "string",
        nullable: true,
        example: "https://example.com/profile.jpg"
      },

      membershipNumber: {
        type: "string",
        nullable: true,
        example: "OD-12345"
      }
    }
  },

  ChangeEmailRequest: {
    type: "object",

    required: [
      "email"
    ],

    properties: {
      email: {
        type: "string",
        format: "email",
        example: "nuevo@email.com"
      }
    }
  },

  ChangePhoneNumberRequest: {
    type: "object",

    required: [
      "phoneNumber"
    ],

    properties: {
      phoneNumber: {
        type: "string",
        example: "+50588888888"
      }
    }
  },

  ChangePasswordRequest: {
    type: "object",

    required: [
      "currentPassword",
      "newPassword"
    ],

    properties: {
      currentPassword: {
        type: "string",
        format: "password",
        example: "MiPassword123"
      },

      newPassword: {
        type: "string",
        format: "password",
        minLength: 8,
        example: "NuevaPassword456"
      }
    }
  },

  ChangeRoleRequest: {
    type: "object",

    required: [
      "roleId"
    ],

    properties: {
      roleId: {
        type: "string",
        example: "role_dentist"
      }
    }
  }
};
