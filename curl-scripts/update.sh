curl "http://localhost:4741/${ID}" \
  --include \
  --request PATCH \
  --header "Authorization: Token token=${TOKEN}" \
  --header "Content-Type: application/json" \
  # --data '{
  #   "game": {
  #     "cell": {
  #       "index": 0,
  #       "value": "x"
  #     },
  #     "over": true
  #   }
  # }'

echo
