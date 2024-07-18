import mongoose from 'mongoose';

const creditSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    number: {
      type: Number,
      required: true,
    },
    code: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: function (v) {
          return /^[a-zA-Z0-9]{8}$/.test(v); // 8-digit alphanumeric
        },
        message: (props) =>
          `${props.value} is not a valid 8-digit alphanumeric code!`,
      },
    },
    isClaimed: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Credit = mongoose.model('Credit', creditSchema);

export default Credit;
